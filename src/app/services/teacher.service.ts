import { ITeacher, Teacher } from './../models/teacher';
import { map } from 'rxjs/operators';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
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

  getTeachers(id: string):Observable<ITeacher[]> {
    const ref = collection(this.fire.firestore, `skools/${id}/teachers`);
    return from(getDocs(ref)).pipe(
      map((snapshot) => {
        return snapshot.docs.map((doc) => {
          const teacher:any = doc.data();
          const data = {...teacher,id: doc.id, };
          return new Teacher(data);
        });
      })
    );
  }

  addTeacher(teacher:ITeacher,id:string){
    const ref = collection(this.fire.firestore, `skools/${id}/teachers`);
    const teacherObj = this.createNewObject(teacher);
    return from(addDoc(ref,teacherObj));
  }

  updateTeacher(teacher:ITeacher,id:string,tid:string){
    const ref = doc(this.fire.firestore, `skools/${id}/teachers/${tid}`);
    const teacherObj = this.createNewObject(teacher);
    return from(updateDoc(ref,teacherObj));
  }


}
