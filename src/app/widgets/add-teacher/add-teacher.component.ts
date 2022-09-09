import { toggleLoading } from './../../store/ui/ui.actions';
import {
  addTeacher,
  updateTeacher,
} from './../../store/teacher/teacher.action';
import { RegisterIdSelector } from './../../store/register/register.selector';
import { ITeacher, Teacher } from './../../models/teacher';
import { EditTeacherSelector } from './../../store/teacher/teacher.selector';
import { map } from 'rxjs/operators';
import { AppState } from './../../store/app.store';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit, OnDestroy {
  @Input() mode = 'add';
  editTeacher: ITeacher;
  teacherForm: FormGroup;
  classOptions: any;
  subjectOptions: any;
  sectionOptions: any;
  regId: string;
  editSub: Subscription;
  regIdSub: Subscription;
  updated: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly modal: ModalController,
    private readonly store: Store<AppState>
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
  }

  ngOnInit() {
    this.sectionOptions = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
      { label: 'D', value: 'D' },
      { label: 'E', value: 'E' },
    ];
    this.teacherForm = this.fb.group({
      name: [undefined, [Validators.required]],
      mail: [
        undefined,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      class: [undefined, [Validators.required]],
      section: [undefined, [Validators.required]],
      subjects: [[], [Validators.required]],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
    this.teacherForm.valueChanges.subscribe((value) =>
      this.classValidation(value)
    );
    this.editSub = this.store
      .pipe(map((state) => EditTeacherSelector(state)))
      .subscribe((teacher: ITeacher) => {
        this.editTeacher = new Teacher();
        if(teacher.id){
          this.editTeacher=teacher;
        }
        this.teacherForm.setValue({
          name: teacher.name,
          mail: teacher.mail,
          class: teacher.class,
          section: teacher.section,
          subjects: teacher.subjects,
          phone: teacher.phone,
        });
      });
    this.regIdSub = this.store
      .pipe(map((state) => RegisterIdSelector(state)))
      .subscribe((id: string) => {
        this.regId = id;
      });
  }

  classValidation(value) {
    if (value.class === 'None' && value.section !== 'None') {
      this.sectionOptions.unshift({ label: 'None', value: 'None' });
      this.teacherForm.setValue({
        ...value,
        section: 'None',
      });
    } else if (value.class !== 'None' && value.section === 'None') {
      this.sectionOptions = this.sectionOptions.filter(
        (item) => item.value !== 'None'
      );
      this.teacherForm.setValue({
        ...value,
        section: null,
      });
    }
  }

  cancel() {
    this.modal.dismiss();
  }

  onSubmit() {
    if (!this.editTeacher.id) {
      const teacher = new Teacher(this.teacherForm.value);
      teacher.createdAt = new Date();
      teacher.updatedAt = new Date();
      this.store.dispatch(
        addTeacher({
          teacher: new Teacher(this.teacherForm.value),
          id: this.regId,
        })
      );
    } else {
      const teacher = new Teacher(this.teacherForm.value);
      teacher.createdAt = this.editTeacher.createdAt;
      teacher.updatedAt = new Date();
      delete teacher.id;
      this.store.dispatch(
        updateTeacher({
          teacher: teacher,
          id: this.regId,
          tid: this.editTeacher.id,
        })
      );
    }
    this.store.dispatch(toggleLoading({ loading: true }));
  }

  ngOnDestroy(): void {
    this.editSub.unsubscribe();
    this.regIdSub.unsubscribe();
  }
}
