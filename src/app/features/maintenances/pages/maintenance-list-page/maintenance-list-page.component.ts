import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';

@Component({
	selector: 'app-maintenance-list-page',
	templateUrl: './maintenance-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceListPageComponent implements OnInit {
	vehicle: IVehicle;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
	}
}
