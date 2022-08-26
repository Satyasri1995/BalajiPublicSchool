import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isSignIn: boolean;
  constructor(private readonly router: Router) {
    this.isSignIn = true;
  }

  ngOnInit() {}

  toggleSignIn(){
    this.isSignIn=!this.isSignIn;
  }

  doSignIn(){
    this.router.navigate(['/register']);
  }
}
