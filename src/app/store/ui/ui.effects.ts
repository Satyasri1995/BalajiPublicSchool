import { tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { redirectTo } from './ui.actions';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class UIEffects{

  constructor(private readonly actions$:Actions,private readonly router:Router,private readonly loading:LoadingController){}

  redirect = createEffect(()=>{
    return this.actions$.pipe(
      ofType(redirectTo),
      tap((payload)=>{
        this.router.navigateByUrl(payload.page);
      })
    )
  },{dispatch:false});



}
