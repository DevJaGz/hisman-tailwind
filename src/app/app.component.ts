import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppThemeService } from '@core/services/app-theme.service';
import { AuthenticationBridgeService } from './core/services/authentication/authentication-bridge.service';
import { OwnerBridgeService } from './core/services/owner/owner-bridge.service';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	constructor(
		private appThemeService: AppThemeService,
		private authenticationBridgeService: AuthenticationBridgeService,
		private ownerBridgeService: OwnerBridgeService
	) {
		this.appThemeService.setTheme();
	}

	ngOnInit(): void {
		this.authenticationBridgeService.getState$().subscribe({
			next: owner => {
				console.log('Owner', owner);
				// If there is owner, then the Authentication was succesffully
				if (owner) {
					// Update/Create the owner in Firestore
					this.ownerBridgeService.upsert(owner).subscribe({
						next: () => alert(`Welcome ${owner.name.toUpperCase()}`),
					}); // TODO: Show a welcome using a toast
				}
			},
		});
	}
}
