import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicDetailsPageRoutingModule } from './basic-details-routing.module';

import { BasicDetailsPage } from './basic-details.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BasicDetailsPageRoutingModule
  ],
  declarations: [BasicDetailsPage]
})
export class BasicDetailsPageModule {}
