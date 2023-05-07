import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';

export interface IVehicleForm {
	license: string;
	type: VEHICLE_TYPE;
	alias: string;
}
