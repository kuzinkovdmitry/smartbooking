import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  ifOpen = false;
  showMenu = true;
  @Output() headIfOpen = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  toggleMenu() {
    this.ifOpen = !this.ifOpen;
    this.headIfOpen.emit(this.ifOpen);
  }
}


