import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemetryTypePage } from './telemetry-type.page';

const routes: Routes = [
  {
    path: '',
    component: TelemetryTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemetryTypePageRoutingModule {}
