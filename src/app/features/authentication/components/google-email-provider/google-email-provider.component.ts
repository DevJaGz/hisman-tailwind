import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@features/authentication/services/authentication.service';

@Component({
	selector: 'app-google-email-provider',
	templateUrl: './google-email-provider.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleEmailProviderComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService) {}

	ngOnInit(): void {
		this.authenticationService.loginWithGoogleEmailProvider().subscribe();
	}
}
