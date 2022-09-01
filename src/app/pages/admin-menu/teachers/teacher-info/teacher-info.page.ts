import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTeacherComponent } from './../../../../widgets/add-teacher/add-teacher.component';


@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.page.html',
  styleUrls: ['./teacher-info.page.scss'],
})
export class TeacherInfoPage implements OnInit {

  today: number;
  constructor(private readonly modal: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.today = new Date().getDay();
  }

  cancel() {
    this.modal.dismiss();
  }

  async editBasicInfo() {
    const modalElm = await this.modal.create({
      component: AddTeacherComponent,
      componentProps: { mode: 'edit' },
    });
    modalElm.present();
  }

}
