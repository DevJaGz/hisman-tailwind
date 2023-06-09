import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { GoogleEmailProviderComponent } from './components/google-email-provider/google-email-provider.component';
import { LandingProviderComponent } from './components/landing-provider/landing-provider.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
	declarations: [LoginPageComponent, RegisterPageComponent, GoogleEmailProviderComponent, LandingProviderComponent],
	imports: [AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
