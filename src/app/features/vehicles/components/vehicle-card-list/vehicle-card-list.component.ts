import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IVehicle } from '@core/interfaces/vehicle.interface';

@Component({
	selector: 'app-vehicle-card-list',
	templateUrl: './vehicle-card-list.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleCardListComponent {
	@Input() vehicles: IVehicle[] = [];

	trackByFn(index: number, vehicle: IVehicle) {
		return vehicle.license;
	}
}
