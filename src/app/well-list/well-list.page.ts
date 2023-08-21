
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
    selector: 'app-well-list',
    templateUrl: './well-list.page.html',
    styleUrls: ['./well-list.page.scss'],
  })

export class WellListPage implements OnInit {

  titleData: any = "Events";
  data: any = []
  dropData :any = []
  CurrenPageTitle: string = "Events";
  dropdownClick :boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.generateItems();
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('event-detail',{
      state:item
    });
  }
  getColorStatus(index: any) {
    if (index === 0) {
      return "#eb445a"
    } else if (index === 1) {
      return "#135d54"
    } else if (index === 2) {
      return "#e0a41c"
    } else {
      return "#eb445a"
    }
  }

  private generateItems() {
    this.data = [];
    for (let i = 0; i < 3; i++) {
      let obj = {
        well_name: "Well Name 001",
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Status1',
        time: "2023:04:12 07:33:56 AM"
      }
      this.data.push(obj);
    }
  }
  private generateItems1() {
    
    for (let i = 0; i < 5; i++) {
      let obj = {
        well_name: "Well Name 001",
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Status1',
        time: "2023:04:12 07:33:56 AM"
      }
      this.dropData.push(obj);
    }
  }

  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

public dropdownList(){
  // alert("youClickedMe!");
  
  this.dropData = [];
  
  if(this.dropdownClick)
  this.dropdownClick = false;
  else
  this.dropdownClick = true;
  for (let i = 0; i < 5; i++) {
    let obj = {
      well_name: "Well Name 001",
      desc: "Description will be seen here. Description will be seen here.",
      status: 'Status1',
      time: "2023:04:12 07:33:56 AM"
    }
    this.dropData.push(obj);
  }
  console.log("click of dropdown ", this.dropdownClick)
}

}
