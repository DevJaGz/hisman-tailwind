import { Injectable } from '@angular/core';
import { MaintenanceAdapter } from '@core/adapters/maintenance.adapter';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { MaintenanceRepository } from '@core/repositories/maintenance.repository';
import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';
import { Observable, of } from 'rxjs';
import { AppStateService } from '../../store/app-state.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService implements MaintenanceRepository {
	addMaintenance$(formValue: IMaintenanceForm): Observable<IMaintenance> {
		const owner = this.appStateService.selectOwnerState;
		const maintenance = this.adapter.toNewMaintenance(formValue, owner);
		console.log('MaintenanceService.addMaintenance$() is running...', formValue, owner);
		console.log('Maintenance.', maintenance);
		return of(maintenance);
	}

	constructor(private adapter: MaintenanceAdapter, private appStateService: AppStateService) {}
}
