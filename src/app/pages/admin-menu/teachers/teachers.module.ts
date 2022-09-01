import { RankPipe } from './../../../pipes/rank.pipe';
import { RemoveTeacherComponent } from './../../../widgets/remove-teacher/remove-teacher.component';
import { AddTeacherComponent } from './../../../widgets/add-teacher/add-teacher.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersPageRoutingModule } from './teachers-routing.module';

import { TeachersPage } from './teachers.page';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TeachersPageRoutingModule,
  ],
  declarations: [
    TeachersPage,
    RemoveTeacherComponent,
  ],
  entryComponents: [
    RemoveTeacherComponent
  ],
})
export class TeachersPageModule {}
