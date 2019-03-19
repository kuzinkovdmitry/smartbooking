import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPrintComponent } from './head-print.component';

describe('HeadPrintComponent', () => {
  let component: HeadPrintComponent;
  let fixture: ComponentFixture<HeadPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
