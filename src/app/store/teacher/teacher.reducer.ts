import { setTeachers, setEditTeachers } from './teacher.action';
import { createReducer, on } from '@ngrx/store';
import { Teacher } from 'src/app/models/teacher';


const InitialState={
  teachers:[],
  editTeacher:new Teacher()
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
  })
)