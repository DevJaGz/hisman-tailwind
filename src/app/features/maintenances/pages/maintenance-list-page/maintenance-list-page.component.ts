import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { MAINTENANCE_ROUTE_NAMES } from '@features/maintenances/maintenances-routing.module';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';

@Component({
	selector: 'app-maintenance-list-page',
	templateUrl: './maintenance-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceListPageComponent implements OnInit {
	vehicle: IVehicle;

	addMaintenance() {
		const URL = [MAINTENANCE_ROUTE_NAMES.ADD];
		this.router.navigate(URL, { relativeTo: this.route });
	}

	seeVehicles() {
		const URL = [CORE_ROUTE_NAMES.VEHICLES];
		this.router.navigate(URL);
	}

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
	}
}
