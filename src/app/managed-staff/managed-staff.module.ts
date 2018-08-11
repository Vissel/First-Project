import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { StaffCvComponent } from './staff-cv/staff-cv.component';
import { StaffListComponent } from './staff-list/staff-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StaffInfoComponent, StaffCvComponent, StaffListComponent]
})
export class ManagedStaffModule { }
