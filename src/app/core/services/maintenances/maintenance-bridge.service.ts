import { Injectable } from '@angular/core';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { MaintenanceRepository } from '@core/repositories/maintenance.repository';
import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MaintenanceBridgeService {
	constructor(private respository: MaintenanceRepository) {}

	addMaintenance$(formValue: IMaintenanceForm): Observable<IMaintenance> {
		return this.respository.addMaintenance$(formValue);
	}
}
