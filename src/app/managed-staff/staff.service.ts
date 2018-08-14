import { Injectable } from '@angular/core';

import {Staff} from './../model/staff.class'

@Injectable({
  providedIn: 'root'
})
export class StaffService {
	public listStaff : Staff[] = [
		new Staff('NV1','Nguyễn Ngọc Thạch',1,'07/01/1996','0981669705','thach@gmail.com','Đại học',1),
		new Staff('NV2','Ngô Thị Mỹ Linh',1,'12/12/1998','01678293636','linh@gmail.com','Đại học',2)
	]
  constructor() { 
  }

  getAllList(){
  	return this.listStaff;
  }
  addStaff(staff: Staff){
  	this.listStaff.push(staff);
  }
}
