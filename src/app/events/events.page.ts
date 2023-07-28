import { Component, OnInit } from '@angular/core';
import { SortPipe } from "../shared/pipes/sort.pipe";


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  myArr = [
    { name: "G", sex: "F", age: 15 },
    { name: "B", sex: "M", age: 25 },
    { name: "Z", sex: "F", age: 18 },
    { name: "A", sex: "F", age: 12 },
    { name: "H", sex: "M", age: 19 }
  ];

  constructor() {} // private sortPipe: SortPipe

  ngOnInit() {
    
      this.initializeItems();
    const myArr = [
      { name: "G", sex: "F", age: 15 },
      { name: "B", sex: "M", age: 25 },
      { name: "Z", sex: "F", age: 18 },
      { name: "A", sex: "F", age: 12 },
      { name: "H", sex: "M", age: 19 }
    ];

    // const sortedArr = this.sortPipe.transform(myArr, "desc", "name");
    // console.log("sort ------",JSON.stringify(sortedArr));
  }


  
  isItemAvailable = true;
  itemss  : string[] = [];

  initializeItems(){
    this.itemss = ["Ram","gopi", "dravid","nav","kiru","vir","john","pra","aug","gau","vis"];
  }

  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.itemss = this.itemss.filter((item) => {
              return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } 
      else {
        // this.initializeItems();
          this.isItemAvailable = true;
      }
  }
}
