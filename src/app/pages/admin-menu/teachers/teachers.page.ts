import { AddTeacherComponent } from './../../../widgets/add-teacher/add-teacher.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {
  constructor(private readonly modal: ModalController) {}

  ngOnInit() {}

  async addTeacher() {
    const modal = await this.modal.create({
      component: AddTeacherComponent,
    });
    modal.present();
  }

  removeTeacher() {
    console.log('remove');
  }
}
