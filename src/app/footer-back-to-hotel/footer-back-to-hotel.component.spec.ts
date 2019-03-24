import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackToHotelComponent } from './footer-back-to-hotel.component';

describe('FooterBackToHotelComponent', () => {
  let component: FooterBackToHotelComponent;
  let fixture: ComponentFixture<FooterBackToHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBackToHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBackToHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
