import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { AuthenticationBridgeService } from '@core/services/authentication/authentication-bridge.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-google-email-provider',
	templateUrl: './google-email-provider.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleEmailProviderComponent {
	// Decorator wires up blockUI instance
	@BlockUI() blockUI: NgBlockUI;

	constructor(private bridge: AuthenticationBridgeService, private router: Router) {}

	login() {
		this.bridge.loginWithGoogleProvider$().subscribe({
			next: () => {
				this.blockUI.start(); // It starts here and stop in the src/app/app.component.ts
				this.router.navigate([CORE_ROUTE_NAMES.BLANK]);
			},
		});
	}
}
