import { Component, OnInit, ViewChild } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router'

import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms'

//service
import {StaffService} from './../../staff.service'

//component
import {Staff} from './../../../../../model/staff.class'

//validate
import {
  nameValidate,
  dateValidate,
  phoneValidate,
  passportNumberValidate,
  emailValidate,
  atmNumberValidate,
} from './../validation'

@Component({
  selector: 'app-staff-list-detail',
  templateUrl: './staff-list-detail.component.html',
  styleUrls: ['./staff-list-detail.component.scss']
})
export class StaffListDetailComponent implements OnInit {
  // @ViewChild
  public staff : Staff = null;
  public id : number ;
  public editItem: Staff;
  public editForm : FormGroup;

  public isDisplay : boolean = true;//disable input tag
  public isHidden : boolean = true;  // hidden button Xac Nhan

  //validate
  formEdit: FormGroup;
  phone: string;
  address: string;
  temporary: string;
  passportNumber: number;
  placeOfIssue: string;
  email: string;
  atmNumber: string;
  titleAlert: string = 'Thông tin không hợp lệ';

  constructor(
  	public activateRoutes : ActivatedRoute,
  	public staffService : StaffService,
    public routerService : Router,
    private fb: FormBuilder, //validate
  	) { 
      this.formEdit = fb.group({
      'phone': [null, phoneValidate],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'temporary': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'passportNumber': [null, passportNumberValidate],
      'placeOfIssue': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'email': [null, emailValidate],
      'atmNumber': [null, atmNumberValidate],
      })
  }

  ngOnInit() {
  	console.log(this.activateRoutes.snapshot.params['id'])
  	this.id = this.activateRoutes.snapshot.params['id'];
  	this.staff = this.staffService.getListByID(this.id);
    console.log(this.id);

    
  	// console.log(this.staff)
  }
  onEdit(){
     this.id = this.activateRoutes.snapshot.params['id'];
     this.routerService.navigate(['/admin/staff', this.id]);

      this.isDisplay = false;
      this.isHidden = false;

   }

  edit(address:string, temporary:string, passportNumber:number, placeOfIssue:string, 
     dateOfIssue:string, phone:number, email:string, taxCode:number, startProbation:string, 
     endProbation:string,startWorking:string, endWorking:string, position:string, atmNumber:number,
     degree:string, lookStatus: number){
     let staffEdit = new Staff(null,null,'',null,'',null,email,degree,lookStatus,address,temporary,
                    passportNumber,dateOfIssue,placeOfIssue,atmNumber,taxCode,position,startProbation,
                    endProbation,startWorking,endWorking);
     this.staffService.edit(staffEdit);


     this.routerService.navigate(['/admin/staff']);
   }

   onUpdateEdit(){
     this.editForm.setValue({
       address : this.staff.address
     })
   }

}
