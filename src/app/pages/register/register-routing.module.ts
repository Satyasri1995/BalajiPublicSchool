import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/skool', pathMatch: 'full' },
  {
    path: 'tabs',
    component: RegisterPage,
    children: [
      {
        path: 'skool',
        loadChildren: () =>
          import('./skool/skool.module').then((m) => m.SkoolPageModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
