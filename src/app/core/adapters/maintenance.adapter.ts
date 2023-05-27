import { Injectable } from '@angular/core';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { IOwner } from '@core/interfaces/users.interface';
import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';

@Injectable({ providedIn: 'root' })
export class MaintenanceAdapter {
	toNewMaintenance(formValue: IMaintenanceForm, owner: IOwner): IMaintenance {
		return {
			ownerUID: owner.uid,
			ownerName: owner.name,
			name: formValue.name,
			date: formValue.date.toISOString(),
			location: formValue.location,
			price: formValue.price,
			description: formValue.description,
			technicianName: formValue.technicianName,
		};
	}
}
