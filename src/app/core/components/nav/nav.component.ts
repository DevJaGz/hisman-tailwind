import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { AuthenticationBridgeService } from '@core/services/authentication/authentication-bridge.service';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
	// Decorator wires up blockUI instance
	@BlockUI() blockUI: NgBlockUI;

	isOwnerDataLoaded$ = this.appStateService.selectOwnerState$;
	constructor(
		private bridge: AuthenticationBridgeService,
		private router: Router,
		private appStateService: AppStateService
	) {}

	logOut() {
		this.blockUI.start('Saliendo...'); // Start blocking
		this.bridge.logOut$().subscribe({
			next: () => {
				this.router.navigate([CORE_ROUTE_NAMES.AUTHENTICATION]);
				this.blockUI.stop(); // Start blocking
			},
			error: () => this.blockUI.stop(), // Start blocking
		});
	}

	navigateToDashboard() {
		this.router.navigate([CORE_ROUTE_NAMES.DASHBOARD]);
	}
}
