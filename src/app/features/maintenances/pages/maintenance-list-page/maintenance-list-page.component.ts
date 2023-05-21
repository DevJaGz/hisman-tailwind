import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';

@Component({
	selector: 'app-maintenance-list-page',
	templateUrl: './maintenance-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceListPageComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}
	ngOnInit(): void {
		const vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
		console.log('vehicle', vehicle);
	}
}
