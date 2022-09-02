import {  redirectTo } from './ui.actions';


import { createReducer,on } from '@ngrx/store';


const InitialState = {
  page:"",
}

export const UIReducer = createReducer(
  InitialState,
  on(redirectTo,(state,payload)=>{
    return {
      ...state,
      page:payload.page
    }
  })
)
