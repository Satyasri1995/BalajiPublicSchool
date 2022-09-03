import { storeRegister } from './register.actions';
import { createReducer, on } from '@ngrx/store';
import { Skool } from "src/app/models/skool";



const InitialState={
  ...new Skool()
}

export const RegisterReducer = createReducer(
  InitialState,
  on(storeRegister,(state,payload)=>{
    return {
      ...state,
      ...payload.skool
    }
  })
)
