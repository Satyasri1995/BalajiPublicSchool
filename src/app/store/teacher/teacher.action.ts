import { ITeacher } from './../../models/teacher';
import { createAction, props } from '@ngrx/store';
import { ISchedule } from 'src/app/models/schedule';

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

export const addSchedule = createAction(
  '[schedule] creates schedule',
  props<{ rid: string; tid: string; schedule: ISchedule }>()
);

export const getSchedule = createAction(
  '[schedule] get all schedules',
  props<{ rid: string; tid: string }>()
);

export const storeSchedules = createAction(
  '[schedule] store all schedules',
  props<{ schedules: ISchedule[] }>()
);

export const updateSchedule = createAction(
  '[schedule] update the scheule',
  props<{ rid: string; tid: string; sid: string; schedule: ISchedule }>()
);

export const editSchedule = createAction(
  '[schedule] edit schedule',
  props<{ rid: string; tid: string; sid: string; schedule: ISchedule }>()
);

export const clearEditSchedule = createAction('[schedule] clear edit schedule');
