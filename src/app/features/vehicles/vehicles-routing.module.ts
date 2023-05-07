import { NgModule } from '@angular/core';
import { RouterModule, Routes as ROUTES } from '@angular/router';
import { AddVehiclePageComponent } from '@features/vehicles/pages/add-vehicle-page/add-vehicle-page.component';

export enum VEHICLES_ROUTE_NAMES {
	BLANK = '',
	ADD = 'new',
	VIEW = 'view/:id',
}

const routes: ROUTES = [
	{
		path: VEHICLES_ROUTE_NAMES.BLANK,
		pathMatch: 'full',
		redirectTo: VEHICLES_ROUTE_NAMES.ADD,
	},
	{
		path: VEHICLES_ROUTE_NAMES.ADD,
		component: AddVehiclePageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VehiclesRoutingModule {}
