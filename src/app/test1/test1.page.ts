import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class Test1Page implements OnInit {
  @Input() title: any;
  @Input() parentMsg: any;
  @Input() parentFunction: any;
  @Input() titleTest:any;

  serviceTest: any;

  @Output() childMessage: EventEmitter<any> = new EventEmitter<any>();

  constructor(private platform: Platform, private dataService: DataService) {}
  test: string | undefined;
  bookTitle: string;
  ngOnInit() {
    this.serviceTest = this.dataService.filterItems('two');
    console.log(this.serviceTest, 'service data');
    this.parentFunction();
  }

  dataHandler() {
    // console.log('dataService', this.dataService.getBooksList());
    // this.parentFunction();
    this.childMessage.emit('hello child 2funciton call');
  }

  callMe(value: string) {
    console.log('Called : ' + value);
  }

  addNewItem(value: string) {
    console.log(value)
    this.childMessage.emit(value);
  }

  onAddBook() {
    console.log('book in ChildComponent:', this.bookTitle);
    this.childMessage.emit(this.bookTitle);
  }


  getColor(country:string) { (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
}
