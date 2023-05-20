import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { VEHICLES_ROUTE_NAMES } from '@features/vehicles/vehicles-routing.module';
import { removeRouteParams } from '@shared/utils/routes.util';

@Component({
	selector: 'app-dashboard-vehicle-card-item',
	templateUrl: './dashboard-vehicle-card-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardVehicleCardItemComponent {
	@Input() vehicle: IVehicle;
	constructor(private router: Router) {}
	editVehicle() {
		this.router.navigate([
			CORE_ROUTE_NAMES.VEHICLES,
			removeRouteParams(VEHICLES_ROUTE_NAMES.EDIT),
			this.vehicle?.license,
		]);
	}
}
