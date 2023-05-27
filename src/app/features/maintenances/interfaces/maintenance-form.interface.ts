export interface IMaintenanceForm {
	name: string;
	price: number;
	date: Date;
	location: string;
	technicianId?: string;
	technicianName: string;
	description: string;
}
