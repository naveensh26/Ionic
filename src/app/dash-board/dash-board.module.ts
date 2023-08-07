import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashBoardPageRoutingModule } from './dash-board-routing.module';

import { DashBoardPage } from './dash-board.page';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    SharedModule
  ],
  declarations: [DashBoardPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashBoardPageModule {}
