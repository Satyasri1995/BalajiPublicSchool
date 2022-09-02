import { IUser } from './../models/user';


export interface UIState{
  page:string
}

export interface AuthState{
  user:IUser;
}



