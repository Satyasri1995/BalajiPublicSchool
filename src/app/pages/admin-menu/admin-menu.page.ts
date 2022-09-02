import { logoutUser } from './../../store/auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.page.html',
  styleUrls: ['./admin-menu.page.scss'],
})
export class AdminMenuPage implements OnInit {

  constructor(private readonly store:Store<AppState>) { }

  ngOnInit() {
  }

  logout(){
    this.store.dispatch(logoutUser());
  }

}
