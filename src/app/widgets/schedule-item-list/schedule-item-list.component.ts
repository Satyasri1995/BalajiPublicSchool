import { element } from 'protractor';
import { UpdateScheduleItemComponent } from './../update-schedule-item/update-schedule-item.component';
import { Router } from '@angular/router';
import { ISchedule } from './../../models/schedule';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-item-list',
  templateUrl: './schedule-item-list.component.html',
  styleUrls: ['./schedule-item-list.component.scss'],
})
export class ScheduleItemListComponent implements OnInit {
  mySchedule;
  constructor(
    private readonly modal: ModalController,
    private readonly actionSheet: ActionSheetController
  ) {
    this.mySchedule = [
      new Schedule({
        id: Math.random().toString(),
        period: 1,
        day: 1,
        class: '7th Class',
        subject: 'English',
        section: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ];
  }

  ngOnInit() {}

  doEditSchedule(schedule: ISchedule | null) {
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
