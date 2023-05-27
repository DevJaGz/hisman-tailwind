import { Injectable } from '@angular/core';
import { MaintenanceAdapter } from '@core/adapters/maintenance.adapter';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { MaintenanceRepository } from '@core/repositories/maintenance.repository';
import { FirestoreService } from '@core/services/firebase/firestore.service';
import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';
import { Observable } from 'rxjs';
import { AppStateService } from '../../store/app-state.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService implements MaintenanceRepository {
	private readonly collectionName = 'maintenances';

	addMaintenance$(formValue: IMaintenanceForm): Observable<IMaintenance> {
		const owner = this.appStateService.selectOwnerState;
		const maintenance = this.adapter.toNewMaintenance(formValue, owner);
		return this.firestoreService.createDocument(this.collectionName, maintenance);
	}

	constructor(
		private adapter: MaintenanceAdapter,
		private appStateService: AppStateService,
		private firestoreService: FirestoreService
	) {}
}
