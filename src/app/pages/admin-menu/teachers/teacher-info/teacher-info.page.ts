import { RegisterIdSelector } from 'src/app/store/register/register.selector';
import {
  EditTeacherSelector,
  SchedulesSelector,
} from './../../../../store/teacher/teacher.selector';
import { map } from 'rxjs/operators';
import { ITeacher } from './../../../../models/teacher';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTeacherComponent } from './../../../../widgets/add-teacher/add-teacher.component';
import { Store } from '@ngrx/store';
import { ISchedule } from 'src/app/models/schedule';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.page.html',
  styleUrls: ['./teacher-info.page.scss'],
})
export class TeacherInfoPage implements OnInit, OnDestroy {
  today: number;
  selectedTeacher: ITeacher;
  teacherSub: Subscription;
  schedules: ISchedule[] = [];
  schedulesSub: Subscription;
  regSub: Subscription;
  mondaySchedule: ISchedule[];
  tuesdaySchesdule: ISchedule[];
  wednesDaySchedule: ISchedule[];
  thursdaySchedule: ISchedule[];
  fridaySchedule: ISchedule[];
  saturdaySchedule: ISchedule[];
  mondayLeisures: number[];
  tuesdayLeisures: number[];
  wednesdayLeisures: number[];
  thursdayLeisures: number[];
  fridayLeisures: number[];
  saturdayLeisures: number[];
  regId: string;
  constructor(
    private readonly modal: ModalController,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    this.teacherSub = this.store
      .pipe(map((state) => EditTeacherSelector(state)))
      .subscribe((teacher: ITeacher) => {
        this.selectedTeacher = teacher;
      });
    this.schedulesSub = this.store
      .pipe(map((state) => SchedulesSelector(state)))
      .subscribe((schedules: ISchedule[]) => {
        this.schedules = schedules;
        this.mondaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 1
        );
        this.mondayLeisures = this.mondaySchedule.filter((sch)=>sch.class==='NA').map((sch)=>sch.period);
        this.tuesdaySchesdule = this.schedules.filter(
          (schedule) => schedule.day === 2
        );
        this.tuesdayLeisures = this.tuesdaySchesdule.filter((sch)=>sch.class==='NA').map((sch)=>sch.period);
        this.wednesDaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 3
        );
        this.wednesdayLeisures = this.wednesDaySchedule.filter((sch)=>sch.class==='NA').map((sch)=>sch.period);
        this.thursdaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 4
        );
        this.thursdayLeisures = this.thursdaySchedule.filter((sch)=>sch.class==='NA').map((sch)=>sch.period);
        this.fridaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 5
        );
        this.fridayLeisures = this.fridaySchedule.filter((sch)=>sch.class==='NA').map((sch)=>sch.period);
        this.saturdaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 6
        );
        this.saturdayLeisures = this.saturdaySchedule.filter((sch)=>sch.class==='NA').map((sch)=>sch.period);
      });
    this.regSub = this.store
      .pipe(map((state) => RegisterIdSelector(state)))
      .subscribe((id) => {
        this.regId = id;
      });
  }

  ionViewDidEnter() {
    this.today = new Date().getDay();
  }

  cancel() {
    this.modal.dismiss();
  }

  async editBasicInfo() {
    const modalElm = await this.modal.create({
      component: AddTeacherComponent,
      componentProps: { mode: 'edit' },
    });
    modalElm.present();
  }

  ngOnDestroy(): void {
    this.teacherSub.unsubscribe();
    this.schedulesSub.unsubscribe();
    this.regSub.unsubscribe();
  }
}
