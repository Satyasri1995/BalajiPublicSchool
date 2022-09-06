import { ISchedule } from './../../models/schedule';
import { dismissModal, redirectTo, toggleLoading } from './../ui/ui.actions';
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
  clearTeacher,
  updateTeacher,
  getSchedule,
  storeSchedules,
  addSchedule,
  updateSchedule,
  clearEditSchedule,
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
            return [
              setTeachers({ teachers }),
              toggleLoading({ loading: false }),
            ];
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
            return [
              getTeachers({ id: payload.id }),
              dismissModal(),
              clearTeacher(),
            ];
          })
        );
      })
    );
  });

  updateTeacher = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTeacher),
      switchMap((payload) => {
        return this.teacherService
          .updateTeacher(payload.teacher, payload.id, payload.tid)
          .pipe(
            mergeMap((__result) => {
              return [
                getTeachers({ id: payload.id }),
                dismissModal(),
                redirectTo({ page: '/admin-menu/teachers' }),
              ];
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

  getSchedule = createEffect(() => {
    return this.actions$.pipe(
      ofType(getSchedule),
      switchMap((payload) => {
        return this.teacherService.getSchedule(payload.rid, payload.tid).pipe(
          mergeMap((schedules) => {
            return [
              storeSchedules({ schedules: schedules }),
              toggleLoading({ loading: false }),
            ];
          })
        );
      })
    );
  });

  addSchedule = createEffect(() => {
    return this.actions$.pipe(
      ofType(addSchedule),
      switchMap((payload) => {
        return this.teacherService
          .addSchedule(payload.rid, payload.tid, payload.schedule)
          .pipe(
            mergeMap((__) => {
              return [getSchedule({ rid: payload.rid, tid: payload.tid })];
            })
          );
      })
    );
  });

  updateSchedule = createEffect(()=>{
    return this.actions$.pipe(
      ofType(updateSchedule),
      switchMap((payload)=>{
        return this.teacherService.updateSchedule(payload.rid,payload.tid,payload.sid,payload.schedule)
        .pipe(
          mergeMap(()=>{
            return [
              getSchedule({ rid: payload.rid, tid: payload.tid }),
              clearEditSchedule()
            ]
          })
        )
      })
    )
  })

}
