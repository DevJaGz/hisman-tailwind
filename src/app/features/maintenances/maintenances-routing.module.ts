import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceAddPageComponent } from '@features/maintenances/pages/maintenance-add-page/maintenance-add-page.component';
import { MaintenanceEditPageComponent } from '@features/maintenances/pages/maintenance-edit-page/maintenance-edit-page.component';
import { MaintenanceListPageComponent } from '@features/maintenances/pages/maintenance-list-page/maintenance-list-page.component';
import {
	MAINTENANCE_BY_LICENSE_RESOLVER_KEY,
	maintenanceByLicenseResolver,
} from '@shared/resolvers/maintenance-by-license.resolver';
import {
	VEHICLE_BY_LICENSE_RESOLVER_KEY,
	vehicleByLicenseResolver,
} from '@shared/resolvers/vehicle-by-license.resolver';

export enum MAINTENANCE_ROUTE_NAMES {
	BLANK = '',
	EDIT = ':maintenanceId',
	ADD = 'new',
}

const ROUTES: Routes = [
	{
		path: MAINTENANCE_ROUTE_NAMES.BLANK,
		component: MaintenanceListPageComponent,
		resolve: {
			[VEHICLE_BY_LICENSE_RESOLVER_KEY]: vehicleByLicenseResolver,
			[MAINTENANCE_BY_LICENSE_RESOLVER_KEY]: maintenanceByLicenseResolver,
		},
	},
	{
		path: MAINTENANCE_ROUTE_NAMES.ADD,
		component: MaintenanceAddPageComponent,
		resolve: {
			[VEHICLE_BY_LICENSE_RESOLVER_KEY]: vehicleByLicenseResolver,
		},
	},
	{
		path: MAINTENANCE_ROUTE_NAMES.EDIT,
		component: MaintenanceEditPageComponent,
		resolve: {
			[VEHICLE_BY_LICENSE_RESOLVER_KEY]: vehicleByLicenseResolver,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class MaintenancesRoutingModule {}
