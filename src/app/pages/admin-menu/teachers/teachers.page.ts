import { Router } from '@angular/router';
import { RemoveTeacherComponent } from './../../../widgets/remove-teacher/remove-teacher.component';
import { AddTeacherComponent } from './../../../widgets/add-teacher/add-teacher.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {
  constructor(
    private readonly modal: ModalController,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  async addTeacher() {
    const modal = await this.modal.create({
      component: AddTeacherComponent,
    });
    modal.present();
  }

  viewTeacherData() {
    this.router.navigate(['/admin-menu/teachers/teacher-info']);
  }

  async removeTeacher() {
    const modal = await this.modal.create({
      component: RemoveTeacherComponent,
    });
    modal.present();
    console.log('remove');
  }
}
