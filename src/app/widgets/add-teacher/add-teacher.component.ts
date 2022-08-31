import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {
  teacherForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly modal: ModalController
  ) {}

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      defaultPassword: ['PaSsWoRd', Validators.required],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  cancel() {
    this.modal.dismiss();
  }

  onSubmit() {
    console.log(this.teacherForm);
    this.cancel();
  }
}
