import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryTypePageRoutingModule } from './telemetry-type-routing.module';

import { TelemetryTypePage } from './telemetry-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryTypePageRoutingModule
  ],
  declarations: [TelemetryTypePage]
})
export class TelemetryTypePageModule {}
