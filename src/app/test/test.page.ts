import { Component, OnInit, ViewChild } from '@angular/core';
import { Test1Page } from '../test1/test1.page';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  @ViewChild(Test1Page, {static : true}) child : Test1Page;
  textTitle = 'parent to child';
  parentMsg: string = 'hello parent to child';
  childMessage: string = '';

  titleTest ="title Test"

  constructor() {}

  ngAfterViewInit() {
    // child is set
    // this.child.callMe();
  }

  callMyChild(){
    // this.child.callMe('Calling from the parent!');
    console.log(this.child.dataHandler())
    
}

  GetMessage(res: any) {
    console.log('test', res);
    this.childMessage = res;
  }

  parentTochildFn = function() {
    console.log('hello');
  }

  ngOnInit() {
    // this.child.ChildTestCmp();
  }


    addBook(newBook: string){
      console.log("add book",newBook)

    }
}
