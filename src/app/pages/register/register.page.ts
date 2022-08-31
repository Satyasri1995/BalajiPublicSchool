import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
      address:['',[Validators.required]],
    });
  }

  onSubmit() {
    // console.log(this.skoolRegisterForm);
    this.router.navigate(['/admin-menu']);
  }

}
