import { ISkool } from './../models/skool';
import { map } from 'rxjs/operators';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private readonly fire: AngularFirestore) {}

  createNewObject(data: any) {
    const dataObj = {};
    for (let property in data) {
      if (data[property]) {
        dataObj[property] = data[property];
      }
    }
    return dataObj
  }

  getRegister(uid: string) {
    const ref = collection(this.fire.firestore, 'skools');
    const q = query(ref, where('uid', '==', uid));
    return from(getDocs(q)).pipe(
      map((data) => {
        const doc = data.docs.shift();
        if (doc) {
          return {id: doc.id,...doc,};
        } else {
          return {};
        }
      })
    );
  }

  createRegister(skool:ISkool){
    const ref = collection(this.fire.firestore, 'skools');
    const skollObj = this.createNewObject(skool);
    return from(addDoc(ref,skollObj));
  }
}
