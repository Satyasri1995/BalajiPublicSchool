import { TeachersState } from './../states';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';

export const TeacherSelector = (state: AppState) => state.teachers;

export const EditTeacherSelector = createSelector(
  TeacherSelector,
  (state:TeachersState) => state.editTeacher
)
