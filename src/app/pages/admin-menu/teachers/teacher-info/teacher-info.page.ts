import { EditTeacherSelector } from './../../../../store/teacher/teacher.selector';
import { map } from 'rxjs/operators';
import { ITeacher } from './../../../../models/teacher';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTeacherComponent } from './../../../../widgets/add-teacher/add-teacher.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.page.html',
  styleUrls: ['./teacher-info.page.scss'],
})
export class TeacherInfoPage implements OnInit, OnDestroy {
  today: number;
  selectedTeacher: ITeacher;
  teacherSub: Subscription;
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
  }
}
