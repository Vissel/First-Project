import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


import {StaffCvComponent} from './managed-staff/staff-cv/staff-cv.component'
import {StaffInfoComponent} from './managed-staff/staff-info/staff-info.component'
import { StaffInfoDetailComponent } from './managed-staff/staff-info/staff-info-detail/staff-info-detail.component'
import {StaffListComponent} from './managed-staff/staff-list/staff-list.component'
import {StaffListDetailComponent} from './managed-staff/staff-list/staff-list-detail/staff-list-detail.component'
import {StaffListAddComponent} from './managed-staff/staff-list/staff-list-add/staff-list-add.component'
import {StaffService} from './managed-staff/staff.service'


@NgModule({
  declarations: [
    AppComponent,
    StaffCvComponent,
    StaffInfoComponent,
    StaffInfoDetailComponent,
    StaffListComponent,
    StaffListDetailComponent,
    StaffListAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
