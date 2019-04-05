import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  constructor(private location: Location) {}
  title = 'travel-test';
  ifOpen: boolean;
  showMenu = true;
  public leftPadding: any;
  receiveMessage($event) {
    this.ifOpen = $event;
    console.log(this.ifOpen);
    if (this.ifOpen === true) {
      this.leftPadding = '98px';
      (document.getElementsByClassName('main-not-found')[0] as HTMLElement).style.width = '66.5%';
    } else {
      this.leftPadding = '219.92px';
      (document.getElementsByClassName('main-not-found')[0] as HTMLElement).style.width = '75%';
    }
  }
  ngOnInit() {
    const URL = this.location.path();
    if (URL === '/change-password' ||
      URL === '/password-recovery' ||
      URL === '/authorization' ||
      URL === '/registration') {
      this.showMenu = false;
      this.leftPadding = '0px';
    }
  }
}
