import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomTabPage } from './bottom-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BottomTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomTabPageRoutingModule {}
