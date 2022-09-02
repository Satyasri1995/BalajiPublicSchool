import { IUser } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collectionData, docData } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: any;
  constructor(
    private readonly auth: AngularFireAuth,
    private readonly fire: AngularFirestore
  ) {}

  createAccount(mail: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(mail, password));
  }

  signInUser(mail:string,password:string){
    return from(this.auth.signInWithEmailAndPassword(mail,password));
  }

  createNewObject(data: any) {
    const dataObj = {};
    for (let property in data) {
      if (data[property]) {
        dataObj[property] = data[property];
      }
    }
    return dataObj
  }

  logout(){
    return from(this.auth.signOut());
  }

  addUser(user: IUser) {
    const ref = collection(this.fire.firestore, 'users');
    const data = this.createNewObject(user);
    return from(addDoc(ref, data));
  }

  getUserByUid(id:string){
    const ref = collection(this.fire.firestore, `users`);
    const q = query(ref,where('uid','==',id));
    return from(getDocs(q)).pipe(
      map((data)=>{
        const doc = data.docs.shift();
        return {
          id:doc.id,
          ...doc.data()
        }
      })
    );
  }

  getUser(id: string): Observable<IUser> {
    const ref = doc(this.fire.firestore, `users/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<IUser>;
  }
}
