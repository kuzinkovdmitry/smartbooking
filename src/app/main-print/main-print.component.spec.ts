import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPrintComponent } from './main-print.component';

describe('MainPrintComponent', () => {
  let component: MainPrintComponent;
  let fixture: ComponentFixture<MainPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
