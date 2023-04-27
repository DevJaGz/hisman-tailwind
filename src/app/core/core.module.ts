import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { AuthenticationRepository } from './repositories/authentication.repository';
import { AuthenticationBridgeService } from './services/authentication/authentication-bridge.service';
import { AuthenticationService } from './services/authentication/authentication.service';

@NgModule({
	declarations: [CorePageComponent],
	imports: [CoreRoutingModule, SharedModule],
	exports: [CoreRoutingModule],
	providers: [
		AuthenticationService,
		AuthenticationBridgeService,
		{
			provide: AuthenticationRepository,
			useExisting: AuthenticationService,
		},
	],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import available only in AppModule');
		}
	}
}
