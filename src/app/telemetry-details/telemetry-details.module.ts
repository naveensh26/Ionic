import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryDetailsPageRoutingModule } from './telemetry-details-routing.module';

import { TelemetryDetailsPage } from './telemetry-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryDetailsPageRoutingModule
  ],
  declarations: [TelemetryDetailsPage]
})
export class TelemetryDetailsPageModule {}
