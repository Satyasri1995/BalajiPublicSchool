import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isSignIn: boolean;
  loginForm: FormGroup;
  signupForm: FormGroup;
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.isSignIn = true;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
    });
    this.signupForm = this.fb.group(
      {
        mail: ['', [Validators.required, Validators.email]],
        name:['',[Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.confirmedValidator('password', 'confirmPassword'),
      }
    );
  }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  toggleSignIn() {
    this.isSignIn = !this.isSignIn;
  }

  doSignIn() {
    // console.log(this.loginForm);
     this.router.navigate(['/register']);
  }

  doSignup(){
    // console.log(this.signupForm);
    this.router.navigate(['/register']);
  }

}
