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
      { label: 'None', value: 'None' },
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
      day: [null, [Validators.required]],
      class: [null, [Validators.required]],
      section: [null, [Validators.required]],
      period: [null, [Validators.required]],
      subject: [null, [Validators.required]],
    });
  }

  doDismissModal() {
    this.modal.dismiss(null, 'cancel');
  }

  onSubmit(){
    console.log(this.scheduleForm);
  }
}
