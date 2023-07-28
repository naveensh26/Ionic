import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFilterBarPageRoutingModule } from './search-filter-bar-routing.module';

import { SearchFilterBarPage } from './search-filter-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFilterBarPageRoutingModule
  ],
  declarations: [SearchFilterBarPage]
})
export class SearchFilterBarPageModule {}
