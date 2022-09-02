
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { storeUser } from "./auth.actions";

const InitialState ={
  user:new User()
}


export const AuthReducer = createReducer(
  InitialState,
  on(storeUser,(state,payload)=>{
    return {
      ...state,
      user:payload.user
    }
  })
)
