import { redirectTo } from './../ui/ui.actions';
import { ISkool, Skool } from './../../models/skool';
import { RegisterService } from './../../services/register.service';
import { switchMap, mergeMap } from 'rxjs/operators';
import { userSigned } from './../auth/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { createRegister, storeRegister } from './register.actions';


@Injectable()
export class RegisterEffects{
    constructor(private readonly actions$:Actions,private readonly registerService:RegisterService){}

    fetchRegisterEffect = createEffect(()=>{
      return this.actions$.pipe(
        ofType(userSigned),
        switchMap((payload)=>{
          return this.registerService.getRegister(payload.uid)
          .pipe(
            mergeMap((register:ISkool)=>{
              if(register.id){
                return [
                  storeRegister({skool:new Skool(register)}),
                  redirectTo({page:'/admin-menu'})
                ];
              }
              return [
                redirectTo({page:'/register'})
              ]
            })
          )
        })
      )
    });

    createRegister = createEffect(()=>{
      return this.actions$.pipe(
        ofType(createRegister),
        switchMap((payload)=>{
          return this.registerService.createRegister(payload.skool)
          .pipe(
            mergeMap((result:any)=>{
              return [
                userSigned({uid:payload.skool.uid}),
              ]
            })
          )
        })
      )
    })
}
