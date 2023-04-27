import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppThemeService } from '@core/services/app-theme.service';
import { AuthenticationBridgeService } from './core/services/authentication/authentication-bridge.service';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	constructor(
		private appThemeService: AppThemeService,
		private authenticationBridgeService: AuthenticationBridgeService
	) {
		this.appThemeService.setAuto();
	}
	ngOnInit(): void {
		this.authenticationBridgeService.getState$().subscribe({
			next: owner => {
				console.log('Owner', owner);
			},
		});
	}
}
