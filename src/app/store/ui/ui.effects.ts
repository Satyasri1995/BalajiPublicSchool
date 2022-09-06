import { tap, switchMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { redirectTo, dismissModal, toggleLoading } from './ui.actions';
import { LoadingController, ModalController } from '@ionic/angular';

@Injectable()
export class UIEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly modal: ModalController,
    private readonly loading: LoadingController
  ) {}

  redirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(redirectTo),
        tap((payload) => {
          this.router.navigateByUrl(payload.page);
        })
      );
    },
    { dispatch: false }
  );

  loadingEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(toggleLoading),
      tap(async (payload) => {
        if (payload.loading) {
          const loadElem = await this.loading.create({
            message:'Loading please wait...',
            spinner:'bubbles',
          });
          loadElem.present();
        } else {
          setTimeout(async()=>{
            const loader = await this.loading.getTop();
            if(loader){
              await loader.dismiss();
            }
          },1000)
        }
      }),
    );
  },{dispatch:false});

  dismissModal = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(dismissModal),
        tap(() => {
          this.modal.dismiss();
        })
      );
    },
    { dispatch: false }
  );
}
