import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';

export const DEFAULT_MAINTENANCE_FORM_VALUE: IMaintenanceForm = {
	name: null,
	price: 0,
	date: new Date(),
	location: null,
	description: null,
	technicianName: null,
	technicianId: null,
};
