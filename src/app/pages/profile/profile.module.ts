import { ScheduleItemListComponent } from '../../widgets/schedule-item-list/schedule-item-list.component';
import { ScheduleComponent } from '../../widgets/schedule/schedule.component';
import { BasicDetailsComponent } from './../../widgets/basic-details/basic-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { RankPipe } from 'src/app/pipes/rank.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    ProfilePage,
    BasicDetailsComponent,
    ScheduleComponent,
    ScheduleItemListComponent,
    RankPipe
  ]
})
export class ProfilePageModule {}
