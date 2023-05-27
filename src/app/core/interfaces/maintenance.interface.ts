export interface IMaintenance {
	id?: string;
	vehicleLicense?: number;
	ownerUID: string;
	ownerName?: string;
	name: string;
	date: Date | string;
	price: number;
	location?: string;
	technicianId?: string;
	technicianName?: string;
	description?: string;
}
