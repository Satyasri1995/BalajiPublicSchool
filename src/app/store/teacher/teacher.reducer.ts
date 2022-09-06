
import { setTeachers, setEditTeachers, clearTeacher, editSchedule, clearEditSchedule, storeSchedules } from './teacher.action';
import { createReducer, on } from '@ngrx/store';
import { Teacher } from 'src/app/models/teacher';
import { Schedule } from 'src/app/models/schedule';


const InitialState={
  teachers:[],
  editTeacher:new Teacher(),
  schedules:[],
  editSchedule:{
    rid:"",
    tid:'',
    sid:'',
    schedule:new Schedule()
  }
}
export const TeacherReducer = createReducer(
  InitialState,
  on(setTeachers,(state,payload)=>{
    return {
      ...state,
      teachers:payload.teachers
    }
  }),
  on(setEditTeachers,(state,payload)=>{
    return {
      ...state,
      editTeacher:payload.teacher
    }
  }),
  on(clearTeacher,(state)=>{
    return {
      ...state,
      editTeacher:new Teacher()
    }
  }),
  on(storeSchedules,(state,payload)=>{
    return {
      ...state,
      schedules:payload.schedules
    }
  }),
  on(editSchedule,(state,payload)=>{
    return {
      ...state,
      editSchedule:{
        rid:payload.rid,
        tid:payload.tid,
        sid:payload.sid,
        schedule:payload.schedule
      }
    }
  }),
  on(clearEditSchedule,(state)=>{
    return {
      ...state,
      editSchedule:{
        rid:'',
        tid:'',
        sid:'',
        schedule:new Schedule()
      }
    }
  })
)
