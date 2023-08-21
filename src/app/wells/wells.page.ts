import { Component, OnInit,Input, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { InfiniteScrollCustomEvent,Platform } from '@ionic/angular';
import { DataService } from '../api/data.service';
import { LoadingServiceService } from '../loading-service.service';


@Component({
  selector: 'app-wells',
  templateUrl: './wells.page.html',
  styleUrls: ['./wells.page.scss'],
})
export class WellsPage implements OnInit {
  @Input() itemsList : string[] = [];
  serviceTest :any;
  searchText : any
  
  public show:boolean = false;
  public buttonName:any = 'Show';
  

  constructor(private platform: Platform, private dataService: DataService, public loading: LoadingServiceService) {}
  ngOnInit() {
    this.loading.present();
    this.generateItems();
    this.loading.dismiss();
    this.serviceTest = this.dataService.filterItems('two');
    console.log("search --",this.serviceTest,this.searchText);
  }

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  private generateItems() {
    const count = this.itemsList.length + 1;
    for (let i = 0; i < 50; i++) {
      this.itemsList.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  isItemAvailable = false;
  itemss  : string[] = [];

  initializeItems(){
      this.itemss = ["Ram","gopi", "dravid","nav","kiru","vir","john","pra","aug","gau","vis"];
  }

  getItems(ev: any) {
      // Reset items back to all of the items
      this.generateItems();
      // this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;
      console.log("search value --",val);
      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.itemsList = this.itemsList.filter((item) => {
              return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }

}
