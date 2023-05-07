import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';

@Component({
	selector: 'app-vehicle-footer-buttons',
	templateUrl: './vehicle-footer-buttons.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleFooterButtonsComponent {
	constructor(private router: Router) {}

	cancel() {
		this.router.navigate([CORE_ROUTE_NAMES.DASHBOARD]);
	}
}
