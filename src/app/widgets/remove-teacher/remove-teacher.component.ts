import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-teacher',
  templateUrl: './remove-teacher.component.html',
  styleUrls: ['./remove-teacher.component.scss'],
})
export class RemoveTeacherComponent implements OnInit {
  removeForm: FormGroup;
  teacherOptions: any;
  constructor(
    private readonly modal: ModalController,
    private readonly fb: FormBuilder,
    private readonly alert: AlertController
  ) {
    this.teacherOptions = [
      { label: 'Teacher', value: 'teacher' },
      { label: 'Teacher2', value: 'teacher2' },
      { label: 'Teacher2', value: 'teacher3' },
    ];
  }

  ngOnInit() {
    this.removeForm = this.fb.group({
      teacher: [null, [Validators.required]],
    });
  }

  cancel() {
    this.modal.dismiss();
  }

  async onSubmit() {
    const alertElm = await this.alert.create({
      header: 'Are you sure want to delete account ?',
      message: 'Once deleted cannot be undone later...',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          handler: () => this.deleteAccount(),
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler:()=>this.cancel()
        },
      ],
    });
    alertElm.present();
  }

  deleteAccount() {
    console.log(this.removeForm);
    this.cancel();
  }
}
