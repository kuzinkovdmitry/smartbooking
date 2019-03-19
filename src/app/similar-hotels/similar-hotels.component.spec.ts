import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarHotelsComponent } from './similar-hotels.component';

describe('SimilarHotelsComponent', () => {
  let component: SimilarHotelsComponent;
  let fixture: ComponentFixture<SimilarHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
