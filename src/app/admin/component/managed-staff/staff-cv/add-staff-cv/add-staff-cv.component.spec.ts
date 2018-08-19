import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffCvComponent } from './add-staff-cv.component';

describe('AddStaffCvComponent', () => {
  let component: AddStaffCvComponent;
  let fixture: ComponentFixture<AddStaffCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
