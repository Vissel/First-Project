import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-managed-staff',
  templateUrl: './managed-staff.component.html',
  styleUrls: ['./managed-staff.component.scss']
})
export class ManagedStaffComponent implements OnInit {

  constructor(
  	private routerService : Router
  	) { }

  ngOnInit() {
  }
  //staff detail
  

}
