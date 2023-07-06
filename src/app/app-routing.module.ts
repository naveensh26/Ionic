import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'side-bar-menu',
    loadChildren: () => import('./side-bar-menu/side-bar-menu.module').then( m => m.SideBarMenuPageModule)
  },
  {
    path: 'dash-board',
    loadChildren: () => import('./dash-board/dash-board.module').then( m => m.DashBoardPageModule)
  },
  {
    path: 'wells',
    loadChildren: () => import('./wells/wells.module').then( m => m.WellsPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'bottom-tab',
    loadChildren: () => import('./bottom-tab/bottom-tab.module').then( m => m.BottomTabPageModule)
  },
  {
    path: 'telemetry',
    loadChildren: () => import('./telemetry/telemetry.module').then( m => m.TelemetryPageModule)
  },
  {
    path: 'telemetry-details',
    loadChildren: () => import('./telemetry-details/telemetry-details.module').then( m => m.TelemetryDetailsPageModule)
  },
  {
    path: 'telemetry-filters',
    loadChildren: () => import('./telemetry-filters/telemetry-filters.module').then( m => m.TelemetryFiltersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
