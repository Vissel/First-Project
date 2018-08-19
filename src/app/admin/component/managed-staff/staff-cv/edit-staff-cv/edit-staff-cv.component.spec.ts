import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaffCvComponent } from './edit-staff-cv.component';

describe('EditStaffCvComponent', () => {
  let component: EditStaffCvComponent;
  let fixture: ComponentFixture<EditStaffCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStaffCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaffCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
