import { restoreSession } from './../store/auth/auth.actions';
import { redirectTo, toggleSplashScreen } from './../store/ui/ui.actions';
import { IUser } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { docData } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, tap, switchMap } from 'rxjs/operators';
import { Preferences as pref } from '@capacitor/preferences';
import { AppState } from '../store/app.store';
import { Store } from '@ngrx/store';
import { signInUser } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: any;
  constructor(
    private readonly auth: AngularFireAuth,
    private readonly fire: AngularFirestore,
    private readonly store:Store<AppState>
  ) {}

  getUserData(){
    return pref.get({key:"user"});
  }

  async saveUserData(mail:string,password:string){
    await pref.set({
      key:'user',
      value:JSON.stringify({mail,password})
    })
  }

  async autoLogin(){
    const {value} = await this.getUserData();
    let user:{mail:string,password:string}={mail:'',password:''};
    if(value){
      user=JSON.parse(value)
    }
    if(user.mail){
      this.store.dispatch(signInUser({mail:user.mail,password:user.password}));
    }else{
      this.store.dispatch(redirectTo({page:'/auth'}));
      this.store.dispatch(toggleSplashScreen({display:false}));
    }

  }

  createAccount(mail: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(mail, password));
  }

  signInUser(mail: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(mail, password));
  }

  createNewObject(data: any) {
    const dataObj = {};
    for (let property in data) {
      if (data[property]) {
        dataObj[property] = data[property];
      }
    }
    return dataObj;
  }

  logout() {
    return from(pref.clear()).pipe(
      switchMap((_)=>{
        return from(this.auth.signOut());
      })
    )
  }

  addUser(user: IUser) {
    const ref = collection(this.fire.firestore, 'users');
    const data = this.createNewObject(user);
    return from(addDoc(ref, data));
  }

  getUserByUid(id: string) {
    const ref = collection(this.fire.firestore, `users`);
    const q = query(ref, where('uid', '==', id));
    return from(getDocs(q)).pipe(
      map((data) => {
        const doc = data.docs.shift();
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    );
  }

  getUser(id: string): Observable<IUser> {
    const ref = doc(this.fire.firestore, `users/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<IUser>;
  }
}
