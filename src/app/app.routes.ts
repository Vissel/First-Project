import {Routes} from '@angular/router' 

//component
import {StaffListComponent} from './admin/component/managed-staff/staff-list/staff-list.component'

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'staff',
		pathMatch: 'full'
	},
	{
		path:'staff',
		component: StaffListComponent
	}
]