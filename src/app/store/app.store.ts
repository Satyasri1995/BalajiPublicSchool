import { AuthReducer } from './auth/auth.reducer';
import { UIReducer } from './ui/ui.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { UIState, AuthState } from "./states";


export interface AppState{
  ui:UIState;
  auth:AuthState;
}

export const AppReducer : ActionReducerMap<AppState> = {
  ui: UIReducer,
  auth: AuthReducer
}
