import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemetryFiltersPage } from './telemetry-filters.page';

const routes: Routes = [
  {
    path: '',
    component: TelemetryFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemetryFiltersPageRoutingModule {}
