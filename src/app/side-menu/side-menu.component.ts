import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  ifOpen = false;
  @Output() headIfOpen = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.ifOpen = !this.ifOpen;
    this.headIfOpen.emit(this.ifOpen);
  }
}


