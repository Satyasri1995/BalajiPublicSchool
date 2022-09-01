import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: any;
  constructor(private readonly auth: AngularFireAuth) {}

  createAccount(mail: string, password: string) {
    this.auth
      .createUserWithEmailAndPassword(mail, password)
      .then((result: any) => {
        const user = new User();
        this.authUser = result.user;
        user.mail = result.user.email;
        user.id = result.user.uid;
        user.createdAt = result.user.metadata.createdAt;
        user.updatedAt=result.user.metadata.createdAt;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}
