import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { VEHICLES_ROUTE_NAMES } from '@features/vehicles/vehicles-routing.module';

@Component({
	selector: 'app-dashboard-vehicle-card-list',
	templateUrl: './dashboard-vehicle-card-list.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardVehicleCardListComponent {
	@Input() vehicles: IVehicle[] = [];

	constructor(private router: Router) {}

	addNewVehicle() {
		this.router.navigate([CORE_ROUTE_NAMES.VEHICLES, VEHICLES_ROUTE_NAMES.ADD]);
	}

	trackByFn(index: number, vehicle: IVehicle) {
		return vehicle.license;
	}
}
