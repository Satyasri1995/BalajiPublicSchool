import { ITeacher } from './../../models/teacher';
import { createAction, props } from '@ngrx/store';

export const getTeachers = createAction(
  '[teacher] get all the teacher',
  props<{ id: string }>()
);

export const setTeachers = createAction(
  '[teacher] set all the teachers',
  props<{ teachers: ITeacher[] }>()
);

export const addTeacher = createAction(
  '[teacher] add new teacher',
  props<{ teacher: ITeacher; id: string }>()
);

export const setEditTeachers = createAction(
  '[teacher] set teacher for edit',
  props<{ teacher: ITeacher }>()
);

export const updateTeacher = createAction(
  '[teacher] update teacher',
  props<{ teacher: ITeacher; id: string; tid: string }>()
);

export const clearTeacher = createAction('[teacher] clear the edit teacher');


