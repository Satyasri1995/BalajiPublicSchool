import { ITeacher } from './../models/teacher';
import { ISkool } from './../models/skool';
import { IUser } from './../models/user';


export interface UIState{
  page:string
}

export interface RegisterState extends ISkool{

}

export interface TeachersState{
  teachers:ITeacher[],
  editTeacher:ITeacher
}

export interface AuthState{
  user:IUser;
}



