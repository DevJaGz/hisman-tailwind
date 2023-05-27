import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserAdapter } from '@core/adapters/user.adapter';
import { SHORT_DURATION } from '@core/constants/alert.constant';
import { AppThemeService } from '@core/services/app-theme.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AlertService } from './core/services/alert.service';
import { AuthenticationBridgeService } from './core/services/authentication/authentication-bridge.service';
import { OwnerBridgeService } from './core/services/owner/owner-bridge.service';

@Component({
	selector: 'app-root',
	template: `
		<block-ui message="Cargando">
			<app-alert></app-alert>
			<router-outlet></router-outlet>
		</block-ui>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	// Decorator wires up blockUI instance
	@BlockUI() blockUI: NgBlockUI;

	constructor(
		private appThemeService: AppThemeService,
		private authenticationBridgeService: AuthenticationBridgeService,
		private ownerBridgeService: OwnerBridgeService,
		private alertService: AlertService,
		private userAdapter: UserAdapter
	) {
		this.appThemeService.setTheme();
		this.blockUI.start(); // Start blocking
	}

	ngOnInit(): void {
		this.handleOwnerState();
	}

	/**
	 * Handle the authentication and the data persistence of the owner
	 */
	handleOwnerState() {
		this.authenticationBridgeService.getState$().subscribe({
			next: user => {
				this.blockUI.stop();
				// If there is owner, then the Authentication was succesffully
				if (user) {
					this.alertService.showInfo('Bienvenido', this.userAdapter.adaptName(user.displayName), {
						displayingTime: SHORT_DURATION,
					});
					// Update/Create the owner in Firestore
					this.ownerBridgeService.upsert(user).subscribe();
				}
			},
		});
	}
}
