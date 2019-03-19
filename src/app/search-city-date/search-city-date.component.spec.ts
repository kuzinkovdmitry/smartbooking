import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityDateComponent } from './search-city-date.component';

describe('SearchCityDateComponent', () => {
  let component: SearchCityDateComponent;
  let fixture: ComponentFixture<SearchCityDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCityDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCityDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
