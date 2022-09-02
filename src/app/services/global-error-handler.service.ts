import { ErrorHandler, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private readonly toast: ToastController) {}
  async handleError(error: any): Promise<void> {
    const code = error.code;
    const message = error.message;

      if(code==='auth/user-not-found'){
        const toast = await this.toast.create({
          header: 'INVALID MAIL-ID',
          message: 'There is no user record corresponding to this Mail-ID',
          color: 'danger',
          buttons: ['ok'],
        });
        toast.present();
      }
  }
}
