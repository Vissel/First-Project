import { Component, OnInit } from '@angular/core';
import{ManagerStaffService} from '../../manager-staff.service'

import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-staff-cv',
  templateUrl: './edit-staff-cv.component.html',
  styleUrls: ['./edit-staff-cv.component.scss']
})
export class EditStaffCvComponent implements OnInit {

  staff= {};
  constructor( public managerStaffService: ManagerStaffService , private router: Router ) { 
    this.staff = this.managerStaffService.staff;
  }
 public edit() {
   this.managerStaffService.staff.userId = this.managerStaffService.list.length+1 ;
   //copy lại sự thay đổi
  // this.managerStaffService.list.push({...this.managerStaffService.staff});
  this.refesh();
  this.router.navigate([""])
 } 
 public next(){
   this.refesh();
  this.router.navigate([""])
 }
  ngOnInit() {
  }

public refesh() {
 this. managerStaffService.staff = {
    userId: "" ,
  	name: "",
    ngayUngTuyen: "",
    viTriUTuyen: "",
    nguoiGThieu: "",
    email: "",
    phone: "",
    result: "",
    note: "",
    link_cv: ""
  }
}
}
