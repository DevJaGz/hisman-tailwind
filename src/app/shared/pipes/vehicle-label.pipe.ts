import { Pipe, PipeTransform } from '@angular/core';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';

@Pipe({
	name: 'vehicleLabel',
})
export class VehicleLabelPipe implements PipeTransform {
	transform(value: VEHICLE_TYPE): string {
		if (value === VEHICLE_TYPE.CAR) {
			return 'Carro';
		}
		if (value === VEHICLE_TYPE.MOTORBIKE) {
			return 'Moto';
		}
		return value;
	}
}
