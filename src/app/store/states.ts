import { ITeacher } from './../models/teacher';
import { ISkool } from './../models/skool';
import { IUser } from './../models/user';
import { ISchedule } from '../models/schedule';


export interface UIState{
  page:string
}

export interface RegisterState extends ISkool{

}

export interface TeachersState{
  teachers:ITeacher[],
  editTeacher:ITeacher,
  schedules:ISchedule[],
  editSchedule:{
    rid:string,
    tid:string,
    sid:string,
    schedule:ISchedule
  }
}

export interface AuthState{
  user:IUser;
}



