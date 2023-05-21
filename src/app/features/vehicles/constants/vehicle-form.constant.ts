import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IVehicleForm } from '../interfaces/vehicle-form.interface';

export const DEFAULT_VEHICLE_FORM_VALUE: IVehicleForm = {
	alias: null,
	documents: [],
	license: null,
	type: VEHICLE_TYPE.CAR,
};
