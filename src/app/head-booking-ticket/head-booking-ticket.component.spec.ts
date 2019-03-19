import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBookingTicketComponent } from './head-booking-ticket.component';

describe('HeadBookingTicketComponent', () => {
  let component: HeadBookingTicketComponent;
  let fixture: ComponentFixture<HeadBookingTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadBookingTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadBookingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
