import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Test1Page } from './test1/test1.page';
import { ChildComponent } from './child/child.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';


// shared modules are only stored the components not pages

@NgModule({
  imports: [CommonModule, IonicModule.forRoot()],
  declarations: [Test1Page,ChildComponent],
  exports: [Test1Page, ChildComponent,FormsModule],
})
export class SharedModule {}
