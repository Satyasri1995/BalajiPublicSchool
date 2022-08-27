import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  { path:'',redirectTo:'tabs/details',pathMatch:'full' },
  {
    path: 'tabs',
    component: ProfilePage,
    children: [
      {
        path: 'details',
        loadChildren: () =>
          import('./basic-details/basic-details.module').then(
            (m) => m.BasicDetailsPageModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./my-schedule/my-schedule.module').then(
            (m) => m.MySchedulePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
