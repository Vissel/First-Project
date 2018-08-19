import { Component, OnInit } from '@angular/core';
import{ManagerStaffService} from '../../manager-staff.service'

import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-add-staff-cv',
  templateUrl: './add-staff-cv.component.html',
  styleUrls: ['./add-staff-cv.component.scss']
})
export class AddStaffCvComponent implements OnInit {

  staff= {};
  constructor( public managerStaffService: ManagerStaffService , private router: Router ) { 
    this.staff = this.managerStaffService.staff; 
  }
public add() {
   this.managerStaffService.staff.userId = this.managerStaffService.list.length;
    this.managerStaffService.list.push({...this.managerStaffService.staff});
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