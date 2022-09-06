import { toggleLoading } from './../../store/ui/ui.actions';
import { updateSchedule, addSchedule } from './../../store/teacher/teacher.action';
import { ISchedule, Schedule } from './../../models/schedule';
import { EditScheduleSelector } from './../../store/teacher/teacher.selector';
import {  map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AppState } from './../../store/app.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-update-schedule-item',
  templateUrl: './update-schedule-item.component.html',
  styleUrls: ['./update-schedule-item.component.scss'],
})
export class UpdateScheduleItemComponent implements OnInit, OnDestroy {
  classOptions;
  subjectOptions;
  periodOptions;
  sectionOptions;
  dayOptions;
  scheduleForm: FormGroup;
  selSchSub: Subscription;
  editSchedule:{
    rid:string,
    tid:string,
    sid:string,
    schedule:ISchedule
  };
  selectedSchedule: ISchedule;
  constructor(
    private readonly modal: ModalController,
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {
    this.classOptions = [
      { label: 'Leisure', value: 'NA' },
      { label: 'Nursery', value: 'Nursery' },
      { label: 'LKG', value: 'LKG' },
      { label: 'UKG', value: 'UKG' },
      { label: '1ˢᵗ Class', value: '1ˢᵗ Class' },
      { label: '2ⁿᵈ Class', value: '2ⁿᵈ Class' },
      { label: '3ʳᵈ Class', value: '3ʳᵈ Class' },
      { label: '4ᵗʰ Class', value: '4ᵗʰ Class' },
      { label: '5ᵗʰ Class', value: '5ᵗʰ Class' },
      { label: '6ᵗʰ Class', value: '6ᵗʰ Class' },
      { label: '7ᵗʰ Class', value: '7ᵗʰ Class' },
      { label: '8ᵗʰ Class', value: '8ᵗʰ Class' },
      { label: '9ᵗʰ Class', value: '9ᵗʰ Class' },
      { label: '10ᵗʰ Class', value: '10ᵗʰ Class' },
    ];
    this.subjectOptions = [
      { label: 'Telugu', value: 'Telugu' },
      { label: 'Sanskrit', value: 'Sanskrit' },
      { label: 'Hindi', value: 'Hindi' },
      { label: 'English', value: 'English' },
      { label: 'Mathematics', value: 'Mathematics' },
      { label: 'Physical Science', value: 'Physical Science' },
      { label: 'Natural Science', value: 'Natural Science' },
      { label: 'Computer Science', value: 'Computer Science' },
      { label: 'Social', value: 'Social' },
      { label: 'General Knowledge', value: 'General Knowledge' },
      { label: 'Physical Training', value: 'Physical Training' },
      { label: 'Abacus', value: 'Abacus' },
      { label: 'Geeta', value: 'Geeta' },
      { label: 'MPT', value: 'MPT' },
    ];
    this.periodOptions = [
      { label: '', value: 1 },
      { label: '', value: 2 },
      { label: '', value: 3 },
      { label: '', value: 4 },
      { label: '', value: 5 },
      { label: '', value: 6 },
      { label: '', value: 7 },
      { label: '', value: 8 },
    ];
    this.sectionOptions = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
      { label: 'D', value: 'D' },
      { label: 'E', value: 'E' },
    ];
    this.dayOptions = [
      { label: 'Monday', value: 1 },
      { label: 'Tuesday', value: 2 },
      { label: 'Wednesday', value: 3 },
      { label: 'Thursday', value: 4 },
      { label: 'Friday', value: 5 },
      { label: 'Saturday', value: 6 },
    ];
  }

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      day: [new Date().getDay(), [Validators.required]],
      class: [undefined, [Validators.required]],
      section: [undefined, [Validators.required]],
      period: [undefined, [Validators.required]],
      subject: [undefined, [Validators.required]],
    });
    this.scheduleForm.valueChanges.subscribe((formValue) =>
      this.leisureValidation(formValue)
    );
    this.selSchSub = this.store
      .pipe(map((state) => EditScheduleSelector(state)))
      .subscribe((editSchedule) => {
        this.selectedSchedule = editSchedule.schedule;
        this.editSchedule=editSchedule;
        this.applytoForm()
      });
  }

  applytoForm(){
    this.scheduleForm.setValue({
      day:this.selectedSchedule.day,
      class:this.selectedSchedule.class,
      section:this.selectedSchedule.section,
      period:this.selectedSchedule.period,
      subject:this.selectedSchedule.subject
    })
  }

  leisureValidation(formValue) {
    if (
      formValue.class === 'NA' &&
      formValue.section !== 'NA' &&
      formValue.subject !== 'NA'
    ) {
      this.subjectOptions.unshift({ label: 'NA', value: 'NA' });
      this.sectionOptions.unshift({ label: 'NA', value: 'NA' });
      this.scheduleForm.setValue({
        ...formValue,
        section: 'NA',
        subject: 'NA',
      });
    } else if (
      formValue.class !== 'NA' &&
      formValue.section === 'NA' &&
      formValue.subject === 'NA'
    ) {
      this.subjectOptions = this.subjectOptions.filter(
        (item) => item.value !== 'NA'
      );
      this.sectionOptions = this.sectionOptions.filter(
        (item) => item.value !== 'NA'
      );
      this.scheduleForm.setValue({
        ...formValue,
        section: null,
        subject: null,
      });
    }
  }

  doDismissModal() {
    this.modal.dismiss(null, 'cancel');
  }

  onSubmit() {
    const schedule = new Schedule(this.scheduleForm.value);
    this.store.dispatch(toggleLoading({loading:true}));
    if(this.selectedSchedule.id){
      schedule.updatedAt=new Date();
      this.store.dispatch(updateSchedule({
        rid:this.editSchedule.rid,
        tid:this.editSchedule.tid,
        sid:this.editSchedule.sid,
        schedule:schedule
      }));
    }else{
      schedule.createdAt=new Date();
      schedule.updatedAt=new Date();
      this.store.dispatch(addSchedule({
        rid:this.editSchedule.rid,
        tid:this.editSchedule.tid,
        schedule:schedule
      }));
    }
    this.doDismissModal();
  }

  ngOnDestroy(): void {
    this.selSchSub?.unsubscribe();
  }
}
