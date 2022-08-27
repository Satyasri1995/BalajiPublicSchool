import { UpdateScheduleItemComponent } from './../../../widgets/update-schedule-item/update-schedule-item.component';
import { RankPipe } from 'src/app/pipes/rank.pipe';
import { ScheduleItemListComponent } from './../../../widgets/schedule-item-list/schedule-item-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySchedulePageRoutingModule } from './my-schedule-routing.module';

import { MySchedulePage } from './my-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySchedulePageRoutingModule
  ],
  declarations: [MySchedulePage,ScheduleItemListComponent,RankPipe,UpdateScheduleItemComponent],
  entryComponents:[UpdateScheduleItemComponent]
})
export class MySchedulePageModule {}
