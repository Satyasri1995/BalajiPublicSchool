import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.page.html',
  styleUrls: ['./basic-details.page.scss'],
})
export class BasicDetailsPage implements OnInit {
  classOptions;
  subjectOptions;
  detailsForm: FormGroup;
  constructor(private readonly fb: FormBuilder) {
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
  }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      classTeacherOf: ['', [Validators.required]],
      teachings: [[], [Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.detailsForm.value);
  }
}
