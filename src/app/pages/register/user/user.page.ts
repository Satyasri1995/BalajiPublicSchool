import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  skools;
  constructor(private readonly alert: AlertController) {
    this.skools = [
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
      {
        name: 'Balaji Public Talent School',
        branch: 'Butchirajupalem',
        registerCode: 12345,
      },
    ];
  }

  ngOnInit() {}

  doRegister(skool) {
    console.log(skool);
  }

  doConfirmRegister(skool) {
    this.alert
      .create({
        header: 'Register Confirmation',
        message: `Do you want to register yourself in ${skool.name} of branch ${skool.branch} with Registration Code ${skool.registerCode}`,
        buttons: [
          {
            text: 'Yes',
            role: 'yes',
            handler: () => this.doRegister(skool),
          },
          {
            text: 'No',
            role: 'no',
          },
        ],
      })
      .then((alertEle) => {
        alertEle.present();
        return alertEle.onDidDismiss();
      });
  }
}
