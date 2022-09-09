import { TeachersState } from './../states';
import { createSelector, createAction } from '@ngrx/store';
import { AppState } from '../app.store';

export const TeacherSelector = (state: AppState) => state.teachers;

export const EditTeacherSelector = createSelector(
  TeacherSelector,
  (state: TeachersState) => state.editTeacher
);

export const EditScheduleSelector = createSelector(
  TeacherSelector,
  (state: TeachersState) => state.editSchedule
);

export const SchedulesSelector = createSelector(
  TeacherSelector,
  (state: TeachersState) => state.schedules
);

export const AllTeachersSelector = createSelector(
  TeacherSelector,
  (state:TeachersState)=>state.teachers
)
