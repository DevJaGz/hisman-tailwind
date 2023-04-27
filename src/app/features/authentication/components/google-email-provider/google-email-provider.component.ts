import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticationBridgeService } from '@features/authentication/services/authentication-bridge.service';

@Component({
	selector: 'app-google-email-provider',
	templateUrl: './google-email-provider.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleEmailProviderComponent {
	constructor(private bridge: AuthenticationBridgeService) {}

	login() {
		this.bridge.loginWithGoogleProvider().subscribe();
	}

	logOutTemp() {
		this.bridge.logOut().subscribe();
	}
}
