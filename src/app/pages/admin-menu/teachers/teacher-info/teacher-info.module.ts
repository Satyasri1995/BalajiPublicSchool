import { UpdateScheduleItemComponent } from './../../../../widgets/update-schedule-item/update-schedule-item.component';
import { RankPipe } from './../../../../pipes/rank.pipe';
import { AddTeacherComponent } from './../../../../widgets/add-teacher/add-teacher.component';
import { ScheduleItemListComponent } from 'src/app/widgets/schedule-item-list/schedule-item-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherInfoPageRoutingModule } from './teacher-info-routing.module';

import { TeacherInfoPage } from './teacher-info.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TeacherInfoPageRoutingModule
  ],
  declarations: [
    TeacherInfoPage,
    ScheduleItemListComponent,
    AddTeacherComponent,
    UpdateScheduleItemComponent,
    RankPipe
  ],
  entryComponents:[
    AddTeacherComponent,
    UpdateScheduleItemComponent
  ]
})
export class TeacherInfoPageModule {}
