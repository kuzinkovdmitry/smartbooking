import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-booking-ticket',
  templateUrl: './main-booking-ticket.component.html',
  styleUrls: ['./main-booking-ticket.component.scss']
})
export class MainBookingTicketComponent implements OnInit {
  ifOpenModalTicket = false;
  constructor() { }

  ngOnInit() {
  }
  toggleModalTicket() {
    this.ifOpenModalTicket = !this.ifOpenModalTicket;
  }
}
