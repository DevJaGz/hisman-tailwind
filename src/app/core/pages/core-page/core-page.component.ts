import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { AuthenticationBridgeService } from '@core/services/authentication/authentication-bridge.service';

@Component({
	selector: 'app-core-page',
	templateUrl: './core-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorePageComponent {
	constructor(private bridge: AuthenticationBridgeService, private router: Router) {}

	logOut() {
		this.bridge.logOut$().subscribe({
			next: () => this.router.navigate([CORE_ROUTE_NAMES.AUTHENTICATION]),
		});
	}
}
