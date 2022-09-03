import { dismissModal, redirectTo } from './../ui/ui.actions';
import { ITeacher } from './../../models/teacher';
import { switchMap, mergeMap } from 'rxjs/operators';
import { TeacherService } from './../../services/teacher.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getTeachers,
  setTeachers,
  addTeacher,
  setEditTeachers,
} from './teacher.action';

@Injectable()
export class TeacherEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly teacherService: TeacherService
  ) {}

  getTeachers = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTeachers),
      switchMap((payload) => {
        return this.teacherService.getTeachers(payload.id).pipe(
          mergeMap((teachers: ITeacher[]) => {
            return [setTeachers({ teachers })];
          })
        );
      })
    );
  });

  addTeacher = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTeacher),
      switchMap((payload) => {
        return this.teacherService.addTeacher(payload.teacher, payload.id).pipe(
          mergeMap((__result) => {
            return [getTeachers({ id: payload.id }), dismissModal()];
          })
        );
      })
    );
  });

  editTeacher = createEffect(() => {
    return this.actions$.pipe(
      ofType(setEditTeachers),
      mergeMap(() => {
        return [redirectTo({ page: '/admin-menu/teachers/teacher-info' })];
      })
    );
  });
}
