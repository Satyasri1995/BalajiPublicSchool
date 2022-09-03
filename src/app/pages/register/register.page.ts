import { IUser } from './../../models/user';
import { UserSelector } from './../../store/auth/auth.selectors';
import { Subscription } from 'rxjs';
import { Skool } from './../../models/skool';
import { createRegister } from './../../store/register/register.actions';
import { AppState } from 'src/app/store/app.store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit,OnDestroy {
  skoolRegisterForm: FormGroup;
  userSub: Subscription;
  user:IUser;
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    this.skoolRegisterForm = this.fb.group({
      name: ['Balaji Public School', [Validators.required]],
      branch: ['Butchirajupalem', [Validators.required]],
      regCode: ['1389073', [Validators.required]],
      postalCode: ['530027', [Validators.required]],
      address: ['Some Fake Adddress', [Validators.required]],
    });
    this.userSub = this.store
      .pipe(map((state) => UserSelector(state)))
      .subscribe((user: IUser) => {
        this.user=user;
      });
  }

  ngOnDestroy(): void {
      this.userSub?.unsubscribe();
  }

  onSubmit() {
    const skool = new Skool(this.skoolRegisterForm.value);
    skool.uid=this.user.uid;
    skool.createdAt=new Date();
    skool.updatedAt=new Date();
    this.store.dispatch(createRegister({ skool }));
  }
}
