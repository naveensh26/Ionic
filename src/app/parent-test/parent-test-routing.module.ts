import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentTestPage } from './parent-test.page';

const routes: Routes = [
  {
    path: '',
    component: ParentTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentTestPageRoutingModule {}
