import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReviewComponent } from './menu-review.component';

describe('MenuReviewComponent', () => {
  let component: MenuReviewComponent;
  let fixture: ComponentFixture<MenuReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
