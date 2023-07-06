import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellsPageRoutingModule } from './wells-routing.module';

import { WellsPage } from './wells.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellsPageRoutingModule
  ],
  declarations: [WellsPage]
})
export class WellsPageModule {}
