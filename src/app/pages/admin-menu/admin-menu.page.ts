import { redirectTo, toggleLoading } from './../../store/ui/ui.actions';


import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { logoutUser } from './../../store/auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegisterIdSelector } from 'src/app/store/register/register.selector';
import { getTeachers } from 'src/app/store/teacher/teacher.action';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.page.html',
  styleUrls: ['./admin-menu.page.scss'],
})
export class AdminMenuPage implements OnInit {
  regIdSub:Subscription;
  regId:string;

  constructor(private readonly store:Store<AppState>) { }

  ngOnInit() {
    this.regIdSub = this.store.pipe(map((state)=>RegisterIdSelector(state))).subscribe((regId:string)=>{
      this.regId=regId;
    })
  }

  getTeachers(){
    if(this.regId){
      this.store.dispatch(toggleLoading({loading:true}));
      this.store.dispatch(getTeachers({id:this.regId}));
      this.store.dispatch(redirectTo({page:'/admin-menu/teachers'}))
    }
  }

  logout(){
    this.store.dispatch(toggleLoading({loading:true}));
    this.store.dispatch(logoutUser());
  }

}
