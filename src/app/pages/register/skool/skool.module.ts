import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkoolPageRoutingModule } from './skool-routing.module';

import { SkoolPage } from './skool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkoolPageRoutingModule
  ],
  declarations: [SkoolPage]
})
export class SkoolPageModule {}
