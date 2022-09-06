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
  regSub:Subscription;
  mondaySchedule: ISchedule[];
  tuesdaySchesdule: ISchedule[];
  wednesDaySchedule: ISchedule[];
  thursdaySchedule: ISchedule[];
  fridaySchedule: ISchedule[];
  saturdaySchedule: ISchedule[];
  regId:string;
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
          (schedule) => schedule.day == 1
        );
        this.tuesdaySchesdule = this.schedules.filter(
          (schedule) => schedule.day == 2
        );
        this.wednesDaySchedule = this.schedules.filter(
          (schedule) => schedule.day == 3
        );
        this.thursdaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 4
        );
        this.fridaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 5
        );
        this.saturdaySchedule = this.schedules.filter(
          (schedule) => schedule.day === 6
        );
      });
      this.regSub = this.store.pipe(map((state)=>RegisterIdSelector(state))).subscribe((id)=>{
        this.regId=id;
      })
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
    this.teacherSub?.unsubscribe();
    this.schedulesSub?.unsubscribe();
    this.regSub?.unsubscribe();
  }
}
