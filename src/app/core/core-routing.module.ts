import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from '@core/pages/core-page/core-page.component';

export enum CORE_ROUTE_NAMES {
	BLANK = '',
	AUTHENTICATION = 'auth',
	NOT_FOUND = '**',
}

const ROUTES: Routes = [
	{
		path: CORE_ROUTE_NAMES.BLANK,
		component: CorePageComponent,
		children: [],
	},
	{
		path: CORE_ROUTE_NAMES.AUTHENTICATION,
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
