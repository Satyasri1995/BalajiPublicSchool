import { RemoveTeacherComponent } from './../../../widgets/remove-teacher/remove-teacher.component';
import { AddTeacherComponent } from './../../../widgets/add-teacher/add-teacher.component';
import { TeacherDataComponent } from './../../../widgets/teacher-data/teacher-data.component';
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
    TeachersPageRoutingModule
  ],
  declarations: [TeachersPage,TeacherDataComponent,AddTeacherComponent,RemoveTeacherComponent],
  entryComponents:[AddTeacherComponent,RemoveTeacherComponent]
})
export class TeachersPageModule {}
