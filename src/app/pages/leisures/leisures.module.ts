import { RankPipe } from './../../pipes/rank.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeisuresPageRoutingModule } from './leisures-routing.module';

import { LeisuresPage } from './leisures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeisuresPageRoutingModule
  ],
  declarations: [LeisuresPage,RankPipe]
})
export class LeisuresPageModule {}
