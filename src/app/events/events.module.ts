import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EventsPageRoutingModule } from './events-routing.module';
import { FilterPipe } from '../shared/pipes/search-filter.pipe';
import { EventsPage } from './events.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EventsPageRoutingModule],
  declarations: [EventsPage, FilterPipe],
})
export class EventsPageModule {}
