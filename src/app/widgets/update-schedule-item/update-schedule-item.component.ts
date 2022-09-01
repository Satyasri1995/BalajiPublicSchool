import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-schedule-item',
  templateUrl: './update-schedule-item.component.html',
  styleUrls: ['./update-schedule-item.component.scss'],
})
export class UpdateScheduleItemComponent implements OnInit {
  classOptions;
  subjectOptions;
  periodOptions;
  sectionOptions;
  dayOptions;
  scheduleForm: FormGroup;
  constructor(
    private readonly modal: ModalController,
    private readonly fb: FormBuilder
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
    this.scheduleForm.valueChanges.subscribe((formValue) => this.leisureValidation(formValue));
  }

  leisureValidation(formValue){
    if (
      formValue.class === 'NA' &&
      formValue.section !== 'NA' &&
      formValue.period !== 0 &&
      formValue.subject !== 'NA'
    ) {
      this.subjectOptions.unshift({label:'NA',value:'NA'});
      this.periodOptions.unshift({label:'NA',value:0});
      this.sectionOptions.unshift({label:'NA',value:'NA'});
      this.scheduleForm.setValue({
        ...formValue,
        section: 'NA',
        period: 0,
        subject: 'NA',
      });
    }else if (
      formValue.class !== 'NA' &&
      formValue.section === 'NA' &&
      formValue.period === 0 &&
      formValue.subject === 'NA'
    ){
      this.subjectOptions=this.subjectOptions.filter(item=>item.value!=='NA');
      this.periodOptions=this.periodOptions.filter(item=>item.value!==0);
      this.sectionOptions=this.sectionOptions.filter(item=>item.value!=='NA');
      this.scheduleForm.setValue({
        ...formValue,
        section: null,
        period: null,
        subject: null,
      });
    }
  }

  doDismissModal() {
    this.modal.dismiss(null, 'cancel');
  }

  onSubmit() {
    console.log(this.scheduleForm);
    this.doDismissModal();
  }
}
