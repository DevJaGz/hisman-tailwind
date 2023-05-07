import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';

@Component({
	selector: 'app-vehicle-form',
	templateUrl: './vehicle-form.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleFormComponent {
	vehicleTypeList = [
		{
			value: VEHICLE_TYPE.CAR,
			label: 'Carro',
		},
		{
			value: VEHICLE_TYPE.MOTORBIKE,
			label: 'Moto',
		},
	];

	constructor(public formService: VehicleFormService) {}
}
