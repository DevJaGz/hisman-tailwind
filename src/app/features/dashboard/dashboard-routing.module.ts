import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from '@features/dashboard/pages/dashboard-page/dashboard-page.component';

export enum DASHBOARD_ROUTE_NAMES {
	BLANK = '',
}

const ROUTES: Routes = [
	{
		path: DASHBOARD_ROUTE_NAMES.BLANK,
		component: DashboardPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
