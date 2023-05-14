import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IDocument } from '@core/interfaces/document.interface';
import { IMaintenance } from '@core/interfaces/maintenance.interface';

export interface IVehicleForm {
	license: string;
	type: VEHICLE_TYPE;
	alias: string;
	documents: IDocument[];
	maintenances: IMaintenance[];
}
