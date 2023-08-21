import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Test1Page } from './test1/test1.page';
import { ChildComponent } from './child/child.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ChartingComponent } from './charting/charting.component';
import { LoadingComponent } from './loading/loading.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ListdropdownComponent } from './components/listdropdown/listdropdown.component';
// import { ExpthemeComponent } from './components/exptheme/exptheme.component';



// shared modules are only stored the components not pages

@NgModule({
  imports: [CommonModule, IonicModule.forRoot()],
  declarations: [Test1Page,ChildComponent,ChartingComponent,LoadingComponent,TextInputComponent,ListdropdownComponent],
  exports: [Test1Page, ChildComponent,FormsModule,ChartingComponent,LoadingComponent,TextInputComponent,ListdropdownComponent],
})
export class SharedModule {}
