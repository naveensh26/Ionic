import { Component, OnInit,  ViewChild  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-telemetry-filters',
  templateUrl: './telemetry-filters.page.html',
  styleUrls: ['./telemetry-filters.page.scss'],
})
export class TelemetryFiltersPage implements OnInit {
  isModalOpen = false;
  constructor() { }

  ngOnInit() {
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
