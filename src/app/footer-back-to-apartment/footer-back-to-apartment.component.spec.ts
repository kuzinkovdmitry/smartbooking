import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackToApartmentComponent } from './footer-back-to-apartment.component';

describe('FooterBackToApartmentComponent', () => {
  let component: FooterBackToApartmentComponent;
  let fixture: ComponentFixture<FooterBackToApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBackToApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBackToApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
