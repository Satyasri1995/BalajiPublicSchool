import { tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { redirectTo, dismissModal } from './ui.actions';
import {  ModalController } from '@ionic/angular';

@Injectable()
export class UIEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly modal: ModalController
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
