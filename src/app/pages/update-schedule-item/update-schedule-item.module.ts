import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateScheduleItemPageRoutingModule } from './update-schedule-item-routing.module';

import { UpdateScheduleItemPage } from './update-schedule-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateScheduleItemPageRoutingModule
  ],
  declarations: [UpdateScheduleItemPage]
})
export class UpdateScheduleItemPageModule {}
