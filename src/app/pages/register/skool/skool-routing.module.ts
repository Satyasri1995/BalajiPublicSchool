import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkoolPage } from './skool.page';

const routes: Routes = [
  {
    path: '',
    component: SkoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkoolPageRoutingModule {}
