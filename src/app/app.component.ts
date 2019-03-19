import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'travel-test';
  ifOpen: boolean;
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
}
