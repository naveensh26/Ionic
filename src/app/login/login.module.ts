import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SharedModule
  ],
  declarations: [LoginPage,AlertDialogComponent],
  exports:[AlertDialogComponent],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class LoginPageModule {}
