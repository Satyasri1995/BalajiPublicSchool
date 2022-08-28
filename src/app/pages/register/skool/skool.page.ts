import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skool',
  templateUrl: './skool.page.html',
  styleUrls: ['./skool.page.scss'],
})
export class SkoolPage implements OnInit {
  skoolRegisterForm: FormGroup;
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.skoolRegisterForm = this.fb.group({
      skool: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      regCode: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // console.log(this.skoolRegisterForm);
    this.router.navigate(['/profile']);
  }
}
