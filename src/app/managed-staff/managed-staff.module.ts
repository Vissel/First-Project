import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffInfoComponent } from './staff-info/staff-info.component';
import { StaffCvComponent } from './staff-cv/staff-cv.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffInfoDetailComponent } from './staff-info/staff-info-detail/staff-info-detail.component';
import { StaffListDetailComponent } from './staff-list/staff-list-detail/staff-list-detail.component';
import { StaffListAddComponent } from './staff-list/staff-list-add/staff-list-add.component';

//service

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
	  StaffInfoComponent, 
	  StaffCvComponent, 
	  StaffListComponent,
	  StaffInfoDetailComponent, 
	  StaffListDetailComponent, StaffListAddComponent],
})
export class ManagedStaffModule { }
