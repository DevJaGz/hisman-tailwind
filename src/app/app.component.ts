import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserAdapter } from '@core/adapters/user.adapter';
import { AppThemeService } from '@core/services/app-theme.service';
import { AlertService } from './core/services/alert.service';
import { AuthenticationBridgeService } from './core/services/authentication/authentication-bridge.service';
import { OwnerBridgeService } from './core/services/owner/owner-bridge.service';

@Component({
	selector: 'app-root',
	template: `
		<app-alert></app-alert>
		<router-outlet></router-outlet>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	constructor(
		private appThemeService: AppThemeService,
		private authenticationBridgeService: AuthenticationBridgeService,
		private ownerBridgeService: OwnerBridgeService,
		private alertService: AlertService,
		private userAdapter: UserAdapter
	) {
		this.appThemeService.setTheme();
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
