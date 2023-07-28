import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentTestPageRoutingModule } from './parent-test-routing.module';

import { ParentTestPage } from './parent-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentTestPageRoutingModule
  ],
  declarations: [ParentTestPage]
})
export class ParentTestPageModule {}
