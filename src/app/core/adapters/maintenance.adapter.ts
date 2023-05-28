import { Injectable } from '@angular/core';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { IOwner } from '@core/interfaces/users.interface';

@Injectable({ providedIn: 'root' })
export class MaintenanceAdapter {
	toNewMaintenance(value: Partial<IMaintenance>, owner: IOwner): IMaintenance {
		return {
			ownerUID: owner.uid,
			ownerName: owner.name,
			name: value.name,
			date: value.date instanceof Date ? value.date.toISOString() : value.date,
			location: value.location,
			price: value.price,
			description: value.description,
			technicianName: value.technicianName,
			vehicleLicense: value.vehicleLicense,
		};
	}
}
