import { RegisterIdSelector } from './../../store/register/register.selector';
import { toggleLoading, dismissModal } from './../../store/ui/ui.actions';
import { removeTeacher } from './../../store/teacher/teacher.action';
import { ITeacher } from './../../models/teacher';
import {  AllTeachersSelector } from './../../store/teacher/teacher.selector';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.store';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-remove-teacher',
  templateUrl: './remove-teacher.component.html',
  styleUrls: ['./remove-teacher.component.scss'],
})
export class RemoveTeacherComponent implements OnInit,OnDestroy {
  removeForm: FormGroup;
  teacherOptions: any;
  teacherSub:Subscription;
  teachers:ITeacher[];
  ridSub:Subscription;
  rid:string;
  constructor(
    private readonly modal: ModalController,
    private readonly fb: FormBuilder,
    private readonly alert: AlertController,
    private readonly store:Store<AppState>
  ) {
    this.teacherOptions = [
      { label: 'Teacher', value: 'teacher' },
      { label: 'Teacher2', value: 'teacher2' },
      { label: 'Teacher2', value: 'teacher3' },
    ];
  }
  ngOnDestroy(): void {
    this.teacherSub.unsubscribe();
    this.ridSub.unsubscribe();
  }

  ngOnInit() {
    this.removeForm = this.fb.group({
      teacher: [null, [Validators.required]],
    });
    this.teacherSub=this.store.pipe(map(state=>AllTeachersSelector(state))).subscribe((teachers:ITeacher[])=>{
      this.teachers=teachers;
      this.teacherOptions=this.teachers.map(teacher=>({label:teacher.name,value:teacher.id}));
    });
    this.ridSub=this.store.pipe(map(state=>RegisterIdSelector(state))).subscribe((rid:string)=>{
      this.rid=rid;
    });
  }

  cancel() {
   this.store.dispatch(dismissModal());
  }

  async onSubmit() {
    const tid=this.removeForm.value.teacher;
    const alertElm = await this.alert.create({
      header: 'Are you sure want to delete account ?',
      message: 'Once deleted cannot be undone later...',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          handler: () => this.deleteAccount(tid),
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

  deleteAccount(tid:string) {
    this.store.dispatch(toggleLoading({loading:true}));
    this.store.dispatch(removeTeacher({rid:this.rid,tid:tid}));
  }
}
