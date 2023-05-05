import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from '@core/pages/core-page/core-page.component';

export enum CORE_ROUTE_NAMES {
	BLANK = '',
	AUTHENTICATION = 'auth',
	DASHBOARD = 'dashboard',
	NOT_FOUND = '**',
}

const ROUTES: Routes = [
	{
		path: CORE_ROUTE_NAMES.BLANK,
		component: CorePageComponent,
		...canActivate(() => redirectUnauthorizedTo([CORE_ROUTE_NAMES.AUTHENTICATION])), // Redirect to AUTHENTICATION if the user is not logged
		children: [
			{
				path: CORE_ROUTE_NAMES.BLANK,
				pathMatch: 'full',
				redirectTo: CORE_ROUTE_NAMES.DASHBOARD,
			},
			{
				path: CORE_ROUTE_NAMES.DASHBOARD,
				loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
		],
	},
	{
		path: CORE_ROUTE_NAMES.AUTHENTICATION,
		...canActivate(() => redirectLoggedInTo([CORE_ROUTE_NAMES.BLANK])), // Redirect to BLANK if the user is logged
		loadChildren: () => import('@features/authentication/authentication.module').then(m => m.AuthenticationModule),
	},
	{
		path: CORE_ROUTE_NAMES.NOT_FOUND,
		redirectTo: CORE_ROUTE_NAMES.AUTHENTICATION,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
