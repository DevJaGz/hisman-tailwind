export interface IMaintenance {
	id?: string;
	ownerId: string;
	vehicleOwnerIndex?: number;
	vehicleOwnerId?: number;
	name: string;
	date: Date | string;
	price: number;
	location?: string;
	technicianId?: string;
	technicianName?: string;
	works: IMaintenanceWork[];
}

export interface IMaintenanceWork {
	id?: string;
	description: string;
	images: string[];
}
