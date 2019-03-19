import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBookingTicketComponent } from './main-booking-ticket.component';

describe('MainBookingTicketComponent', () => {
  let component: MainBookingTicketComponent;
  let fixture: ComponentFixture<MainBookingTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBookingTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBookingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
