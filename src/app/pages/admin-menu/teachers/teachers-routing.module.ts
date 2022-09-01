import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersPage } from './teachers.page';

const routes: Routes = [
  {
    path: '',
    component: TeachersPage
  },
  {
    path: 'teacher-info',
    loadChildren: () => import('./teacher-info/teacher-info.module').then( m => m.TeacherInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersPageRoutingModule {}
