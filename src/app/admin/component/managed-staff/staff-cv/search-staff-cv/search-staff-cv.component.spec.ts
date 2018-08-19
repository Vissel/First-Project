import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStaffCvComponent } from './search-staff-cv.component';

describe('SearchStaffCvComponent', () => {
  let component: SearchStaffCvComponent;
  let fixture: ComponentFixture<SearchStaffCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStaffCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStaffCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
