import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeisuresPage } from './leisures.page';

const routes: Routes = [
  {
    path: '',
    component: LeisuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeisuresPageRoutingModule {}
