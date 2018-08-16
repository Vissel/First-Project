import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Router} from '@angular/router'

import { AdminComponentComponent } from './admin-component/admin-component.component';

//component
import {StaffCvComponent} from './component/managed-staff/staff-cv/staff-cv.component'
import {StaffInfoComponent} from './component/managed-staff/staff-info/staff-info.component'
import { StaffInfoDetailComponent } from './component/managed-staff/staff-info/staff-info-detail/staff-info-detail.component'
import {StaffListComponent} from './component/managed-staff/staff-list/staff-list.component'
import {StaffListDetailComponent} from './component/managed-staff/staff-list/staff-list-detail/staff-list-detail.component'
import {StaffListAddComponent} from './component/managed-staff/staff-list/staff-list-add/staff-list-add.component'
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component'

//service
import {StaffService} from './component/managed-staff/staff.service'

//routes
import {routesAdmin} from './routesAdmin';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesAdmin)
  ],
  declarations: [
  	AdminComponentComponent,
    StaffCvComponent,
    StaffInfoComponent,
    StaffInfoDetailComponent,
    StaffListComponent,
    StaffListDetailComponent,
    StaffListAddComponent,
    ManagedStaffComponent,
  	]
})
export class AdminModule { }
