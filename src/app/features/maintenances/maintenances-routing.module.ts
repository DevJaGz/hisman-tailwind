import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { MaintenanceListPageComponent } from '@features/maintenances/pages/maintenance-list-page/maintenance-list-page.component';

export enum MAINTENANCE_ROUTE_NAMES {
	BLANK = '',
	LIST = ':license',
}

const ROUTES: Routes = [
	{
		path: MAINTENANCE_ROUTE_NAMES.BLANK,
		redirectTo: `/${CORE_ROUTE_NAMES.DASHBOARD}`,
		pathMatch: 'full',
	},
	{
		path: MAINTENANCE_ROUTE_NAMES.LIST,
		component: MaintenanceListPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class MaintenancesRoutingModule {}
