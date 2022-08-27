import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateScheduleItemPage } from './update-schedule-item.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateScheduleItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateScheduleItemPageRoutingModule {}
