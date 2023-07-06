import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryFiltersPageRoutingModule } from './telemetry-filters-routing.module';

import { TelemetryFiltersPage } from './telemetry-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryFiltersPageRoutingModule
  ],
  declarations: [TelemetryFiltersPage]
})
export class TelemetryFiltersPageModule {}
