import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent  implements OnInit {
  public alertButtons = ['OK'];
  constructor() { }

  ngOnInit() {}

  isAlertOpen = false;
  // public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
