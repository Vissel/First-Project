import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

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
  constructor(
  	public activateRoutes : ActivatedRoute,
  	public staffService : StaffService
  	) { }

  ngOnInit() {
  	console.log(this.activateRoutes.snapshot.params['id'])
  	let id = this.activateRoutes.snapshot.params['id'];
  	this.staff = this.staffService.getListByID(id);
  	console.log(this.staff)
  }

}
