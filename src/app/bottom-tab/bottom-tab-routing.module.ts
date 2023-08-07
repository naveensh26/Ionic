import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottomTabPage } from './bottom-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BottomTabPage
  }

  // {
  //   path: '',
  //   component: BottomTabPage,
  //   children: [
  //     {
  //       path: 'alerts',
  //       loadChildren: () => import('../alerts/alerts-routing.module').then(m => m.AlertsPageRoutingModule)
  //     },
  //     {
  //       path: 'search',
  //       loadChildren: () => import('../telemetry/telemetry-routing.module').then(m => m.TelemetryPageRoutingModule)
  //     },
  //     {
  //       path: 'tab3',
  //       loadChildren: () => import('../notifications/notifications-routing.module').then(m => m.NotificationsPageRoutingModule)
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/alerts',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomTabPageRoutingModule {}
