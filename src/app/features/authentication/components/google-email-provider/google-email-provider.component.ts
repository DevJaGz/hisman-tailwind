import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { AuthenticationBridgeService } from '@core/services/authentication/authentication-bridge.service';

@Component({
	selector: 'app-google-email-provider',
	templateUrl: './google-email-provider.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleEmailProviderComponent {
	constructor(private bridge: AuthenticationBridgeService, private router: Router) {}

	login() {
		this.bridge.loginWithGoogleProvider$().subscribe({
			next: () => this.router.navigate([CORE_ROUTE_NAMES.BLANK]),
		});
	}
}
