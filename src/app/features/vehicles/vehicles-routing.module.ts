import { NgModule } from '@angular/core';
import { RouterModule, Routes as ROUTES } from '@angular/router';
import { AddVehiclePageComponent } from '@features/vehicles/pages/add-vehicle-page/add-vehicle-page.component';
import { EditVehiclePageComponent } from '@features/vehicles/pages/edit-vehicle-page/edit-vehicle-page.component';
import { VehicleListPageComponent } from '@features/vehicles/pages/vehicle-list-page/vehicle-list-page.component';
import {
	VEHICLE_BY_LICENSE_RESOLVER_KEY,
	vehicleByLicenseResolver,
} from '@shared/resolvers/vehicle-by-license.resolver';
import { VEHICLES_RESOLVER_KEY, vehiclesResolver } from '@shared/resolvers/vehicles.resolver';

export enum VEHICLES_ROUTE_NAMES {
	BLANK = '',
	ADD = 'new',
	EDIT = 'edit/:license',
}

const routes: ROUTES = [
	{
		path: VEHICLES_ROUTE_NAMES.BLANK,
		component: VehicleListPageComponent,
		resolve: {
			[VEHICLES_RESOLVER_KEY]: vehiclesResolver,
		},
	},
	{
		path: VEHICLES_ROUTE_NAMES.ADD,
		component: AddVehiclePageComponent,
	},
	{
		path: VEHICLES_ROUTE_NAMES.EDIT,
		component: EditVehiclePageComponent,
		resolve: {
			[VEHICLE_BY_LICENSE_RESOLVER_KEY]: vehicleByLicenseResolver,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VehiclesRoutingModule {}
