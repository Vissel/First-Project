import { Component, OnInit, Input } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router'

//service
import {StaffService} from './../../staff.service'

//component
import {Staff} from './../../../../../model/staff.class'

@Component({
  selector: 'app-staff-info-detail',
  templateUrl: './staff-info-detail.component.html',
  styleUrls: ['./staff-info-detail.component.scss']
})
export class StaffInfoDetailComponent implements OnInit {

	public staff : Staff = null

  public isDisplay : boolean = true;//disable input tag
  public isHidden : boolean = true;  // hidden button Xac Nhan

  constructor(
  	public activateRoutes : ActivatedRoute,
  	public staffService : StaffService,
    public routerService : Router,
  	) { }

  ngOnInit() {
  	console.log(this.activateRoutes.snapshot.params['id'])
  	let id = this.activateRoutes.snapshot.params['id'];
  	this.staff = this.staffService.getListByID(id);

    
  	// console.log(this.staff)
  }
  onEdit(staff, id : number){
     staff = this.staffService.getListByID(id); 
     this.routerService.navigate(['/staff', staff.id]);

      this.isDisplay = false;
      this.isHidden = false;
     console.log(staff);

   }
   edit(address:string, temporary:string, passportNumber:number, placeOfIssue:string, 
     dateOfIssue:string, phone:number, email:string, taxCode:number, startProbation:string, 
     endProbation:string,startWorking:string, endWorking:string, position:string, atmNumber:number,
     degree:string, lookStatus: number){
     let staffEdit = new Staff(null,null,'',null,'',null,email,degree,lookStatus,address,temporary,
                    passportNumber,dateOfIssue,placeOfIssue,atmNumber,taxCode,position,startProbation,
                    endProbation,startWorking,endWorking);
     this.staffService.edit(staffEdit);

     this.routerService.navigate(['/staff']);
   }

}
