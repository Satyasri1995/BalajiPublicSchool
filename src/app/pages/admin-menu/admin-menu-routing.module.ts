import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMenuPage } from './admin-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMenuPage
  },
  {
    path: 'teachers',
    loadChildren: () => import('./teachers/teachers.module').then( m => m.TeachersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMenuPageRoutingModule {}
