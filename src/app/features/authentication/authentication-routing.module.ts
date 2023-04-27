import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@features/authentication/pages/login-page/login-page.component';

export enum AUTHENTICATION_ROUTE_NAMES {
	BLANK = '',
	LOGIN = 'login',
	REGISTER = 'register',
}

const ROUTES: Routes = [
	{
		path: AUTHENTICATION_ROUTE_NAMES.BLANK,
		redirectTo: AUTHENTICATION_ROUTE_NAMES.LOGIN,
		pathMatch: 'full',
	},
	{
		path: AUTHENTICATION_ROUTE_NAMES.LOGIN,
		component: LoginPageComponent,
	},
	// TODO: IF IT IS NECESSARY ADD REGISTER PAGE
	// {
	// 	path: AUTHENTICATION_ROUTE_NAMES.REGISTER,
	// 	component: RegisterPageComponent,
	// },
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
