import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInfoDetailComponent } from './staff-info-detail.component';

describe('StaffInfoDetailComponent', () => {
  let component: StaffInfoDetailComponent;
  let fixture: ComponentFixture<StaffInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
