import { toggleLoading, toggleSplashScreen } from './../ui/ui.actions';
import { IUser } from './../../models/user';
import {
  createAccount,
  signInUser,
  storeUser,
  logoutUser,
  userSigned,
  restoreSession,
} from './auth.actions';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { redirectTo } from '../ui/ui.actions';


@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
  ) {}

  signupEffect = createEffect(() => {
    let userObj: IUser;
    return this.actions$.pipe(
      ofType(createAccount),
      switchMap((payload) => {
        return this.authService
          .createAccount(payload.mail, payload.password)
          .pipe(
            switchMap((result: any) => {
              const user = new User();
              user.mail = result.user.email;
              user.uid = result.user.uid;
              user.createdAt = result.user.metadata.createdAt;
              user.updatedAt = result.user.metadata.createdAt;
              userObj = user;
              return this.authService.addUser(user);
            }),
            mergeMap((result: any) => {
              return [
                storeUser({ user: userObj }),
                userSigned({ uid: userObj.uid }),
                toggleLoading({ loading: false }),
              ];
            })
          );
      })
    );
  });

  restoreSession = createEffect(() => {
    let uid: string;
    return this.actions$.pipe(
      ofType(restoreSession),
      switchMap((payload) => {
        uid = payload.uid;
        return this.authService.getUserByUid(payload.uid);
      }),
      mergeMap((userResult: IUser) => {
        const user = new User(userResult);
        return [
          storeUser({ user: user }),
          userSigned({ uid }),
          toggleLoading({ loading: false }),
          toggleSplashScreen({display:false})
        ];
      })
    );
  });

  signInEffect = createEffect(() => {
    let uid;
    return this.actions$.pipe(
      ofType(signInUser),
      switchMap((payload) => {
        return this.authService.signInUser(payload.mail, payload.password).pipe(
          switchMap((result) => {
            uid = result.user.uid;
            this.authService.saveUserData(payload.mail, payload.password);
            return this.authService.getUserByUid(uid);
          }),
          mergeMap((userResult: IUser) => {
            const user = new User(userResult);
            return [
              storeUser({ user: user }),
              userSigned({ uid }),
              toggleLoading({ loading: false }),
              toggleSplashScreen({display:false})
            ];
          })
        );
      })
    );
  });

  logoutEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutUser),
      switchMap(() => {
        return this.authService.logout().pipe(
          mergeMap(() => {
            return [
              storeUser({ user: new User() }),
              toggleLoading({ loading: false }),
              redirectTo({ page: '/auth' }),
            ];
          })
        );
      })
    );
  });
}
