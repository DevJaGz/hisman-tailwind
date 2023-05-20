import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IDocument } from '@core/interfaces/document.interface';

export interface IVehicle {
	id?: string;
	license: string;
	color?: string;
	image?: string;
	type: VEHICLE_TYPE;
	documents: IDocument[];
	alias?: string;
}
