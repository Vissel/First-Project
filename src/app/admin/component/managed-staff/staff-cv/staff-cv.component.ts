import { Component, OnInit ,TemplateRef } from '@angular/core';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import{ManagerStaffService} from './../manager-staff.service'
import {Router }  from "@angular/router"
@Component({
  selector: 'app-staff-cv',
  templateUrl: './staff-cv.component.html',
  styleUrls: ['./staff-cv.component.scss']
})
export class StaffCvComponent  {

 	name = 'Angular';
    totalItems = 64;
  currentPage = 1;

  modalRef:	 BsModalRef;
  config = {
    keyboard: true
  };
  
  isEdit = false;
  constructor(private modalService: BsModalService, public managerStaffService: ManagerStaffService
 , private router: Router){
  }
  public del(userId: number) {
    this.managerStaffService.list = this.managerStaffService.list.filter ( r => r.userId !==userId);
  }

public edit(item, template) {
  this.isEdit = true;
   this.managerStaffService.staff =  item ;

    this.router.navigate(['/edit'])
}
	isAdd=false;
   public add (item, tempalte) {
   if(!this.isAdd) {
this.managerStaffService.staff.userId = this.managerStaffService.list.length;
    // this.managerStaffService.list.push({...this.managerStaffService.staff});
  
  } else {
  this.managerStaffService.list.forEach( r => {
    if(r.userId === this.managerStaffService.staff.userId) {
      r = this.managerStaffService.staff.userId;
    }
  })
  this.isAdd = false;
  }  
    this.router.navigate(['admin/staff/addcv'])
   }
   
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }


 
}

