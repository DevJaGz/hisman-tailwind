import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { MaintenanceFormService } from '@features/maintenances/services/maintenance-form.service';
import { VEHICLES_ROUTE_NAMES } from '@features/vehicles/vehicles-routing.module';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';
import { removeRouteParams } from '@shared/utils/routes.util';

@Component({
	selector: 'app-maintenance-add-page',
	templateUrl: './maintenance-add-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceAddPageComponent implements OnInit {
	vehicle: IVehicle;
	cancelRoute: string[];

	constructor(public formService: MaintenanceFormService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
		this.cancelRoute = [
			CORE_ROUTE_NAMES.VEHICLES,
			this.vehicle.license,
			removeRouteParams(VEHICLES_ROUTE_NAMES.MAINTENANCES),
		];
	}
}
