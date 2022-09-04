import { UpdateScheduleItemComponent } from './../update-schedule-item/update-schedule-item.component';
import { ISchedule } from './../../models/schedule';
import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-item-list',
  templateUrl: './schedule-item-list.component.html',
  styleUrls: ['./schedule-item-list.component.scss'],
})
export class ScheduleItemListComponent implements OnInit {
  @Input() mode: string;
  @Input() schedule;
  constructor(
    private readonly modal: ModalController,
    private readonly actionSheet: ActionSheetController
  ) {}

  ngOnInit() {}

  doEditSchedule(schedule) {
    if(this.mode!=='edit'){
      return;
    }
    this.modal
      .create({ component: UpdateScheduleItemComponent })
      .then((modalEle) => {
        modalEle.present();
        return modalEle.onDidDismiss();
      })
      .then((result) => {
        console.log(result.role);
      });
  }

  doDeleteSchedule(schedule: ISchedule) {
    console.log(schedule);
  }

  doActionSheet(schedule: ISchedule) {
    if(this.mode!=='edit'){
      return;
    }
   const actionSheet = this.actionSheet.create({
      header:'Choose your action',
      buttons:[
        {
          text:'Edit Schedule',
          role:'edit',
          icon:'create-outline',
          handler:()=>this.doEditSchedule(schedule)
        },
        {
          text:'Delete Schedule',
          role:'delete',
          icon:'trash-outline',
          handler:()=>this.doEditSchedule(schedule)
        },
        {
          text:'Cancel',
          role:'cancel',
          icon:'close'
        }
      ]
    });
    actionSheet.then((actionSheetEle)=>{
      actionSheetEle.present();
    });
  }
}
