import { Injectable } from '@angular/core';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { MaintenanceRepository } from '@core/repositories/maintenance.repository';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MaintenanceBridgeService {
	constructor(private respository: MaintenanceRepository) {}

	addMaintenance$(value: Partial<IMaintenance>): Observable<IMaintenance> {
		return this.respository.addMaintenance$(value);
	}
}
