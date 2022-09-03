import { TeacherReducer } from './teacher/teacher.reducer';
import { RegisterReducer } from './register/register.reducer';
import { AuthReducer } from './auth/auth.reducer';
import { UIReducer } from './ui/ui.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { UIState, AuthState, RegisterState, TeachersState } from "./states";


export interface AppState{
  ui:UIState;
  auth:AuthState;
  register:RegisterState,
  teachers:TeachersState
}

export const AppReducer : ActionReducerMap<AppState> = {
  ui: UIReducer,
  auth: AuthReducer,
  register:RegisterReducer,
  teachers:TeacherReducer
}
