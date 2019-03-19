import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-print',
  templateUrl: './main-print.component.html',
  styleUrls: ['./main-print.component.scss']
})
export class MainPrintComponent implements OnInit {
  ifOpenModalBooking = false;
  ifOpenModalApartment = false;
  constructor() { }

  ngOnInit() {
  }
  toggleModalBooking() {
    this.ifOpenModalBooking = !this.ifOpenModalBooking;
  }
  toggleModalApartment() {
    this.ifOpenModalApartment = !this.ifOpenModalApartment;
  }
}
