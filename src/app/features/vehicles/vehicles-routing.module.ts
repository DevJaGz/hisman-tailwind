import { NgModule } from '@angular/core';
import { RouterModule, Routes as ROUTES } from '@angular/router';
import { AddVehiclePageComponent } from '@features/vehicles/pages/add-vehicle-page/add-vehicle-page.component';
import { EditVehiclePageComponent } from '@features/vehicles/pages/edit-vehicle-page/edit-vehicle-page.component';

export enum VEHICLES_ROUTE_NAMES {
	BLANK = '',
	ADD = 'new',
	EDIT = 'edit/:id',
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
	{
		path: VEHICLES_ROUTE_NAMES.EDIT,
		component: EditVehiclePageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VehiclesRoutingModule {}
