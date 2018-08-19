import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhihiComponent } from './ahihi.component';

describe('AhihiComponent', () => {
  let component: AhihiComponent;
  let fixture: ComponentFixture<AhihiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhihiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhihiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
