import {Routes} from '@angular/router'

//component

import {StaffListComponent} from './component/managed-staff/staff-list/staff-list.component'
import {StaffListAddComponent} from './component/managed-staff/staff-list/staff-list-add/staff-list-add.component'
import {StaffInfoDetailComponent} from './component/managed-staff/staff-info/staff-info-detail/staff-info-detail.component'
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component'
import {StaffCvComponent} from './component/managed-staff/staff-cv/staff-cv.component'

export const routesAdmin : Routes = [
	{
		path:'',
		redirectTo:'staff',
		pathMatch:'full',
	},
	{
		path: 'staff',
		component: ManagedStaffComponent,
		children : [
			{
				path:'',
				redirectTo:'staff-list',
				pathMatch:'full',
			},
			{
				path: 'staff-list',
				component: StaffListComponent,
			},
			{
				path:'staff-list-add',
				component:StaffListAddComponent,
			},
			{
				path: ':id',
				component: StaffInfoDetailComponent,
			}
			

		]
	},
	
	{
		path:'staff-cv',
		component: StaffCvComponent,
	}

	
]