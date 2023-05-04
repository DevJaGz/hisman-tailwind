import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserAdapter } from '@core/adapters/user.adapter';
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
			next: owner => {
				console.log('Owner', owner);
				this.blockUI.stop(); // Stop blocking
				// If there is owner, then the Authentication was succesffully
				if (owner) {
					this.alertService.showInfo('Bienvenido', this.userAdapter.adaptName(owner.name), {
						displayingTime: 4000,
					});
					// Update/Create the owner in Firestore
					this.ownerBridgeService.upsert(owner).subscribe();
				}
			},
		});
	}
}
