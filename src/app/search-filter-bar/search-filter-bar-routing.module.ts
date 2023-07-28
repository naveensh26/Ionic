import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFilterBarPage } from './search-filter-bar.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFilterBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFilterBarPageRoutingModule {}
