import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCvComponent } from './staff-cv.component';

describe('StaffCvComponent', () => {
  let component: StaffCvComponent;
  let fixture: ComponentFixture<StaffCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
