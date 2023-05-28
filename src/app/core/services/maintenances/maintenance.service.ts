import { Injectable } from '@angular/core';
import { MaintenanceAdapter } from '@core/adapters/maintenance.adapter';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { MaintenanceRepository } from '@core/repositories/maintenance.repository';
import { FirestoreService } from '@core/services/firebase/firestore.service';
import { Observable } from 'rxjs';
import { AppStateService } from '../../store/app-state.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService implements MaintenanceRepository {
	private readonly collectionName = 'maintenances';

	addMaintenance$(value: Partial<IMaintenance>): Observable<IMaintenance> {
		const owner = this.appStateService.selectOwnerState;
		const maintenance = this.adapter.toNewMaintenance(value, owner);
		return this.firestoreService.createDocument(this.collectionName, maintenance);
	}

	getMaintenancesByVehicleLicense$(vehicleLicense: string): Observable<IMaintenance[]> {
		return this.firestoreService.getDocumentsByVehicleLicense(this.collectionName, vehicleLicense) as Observable<
			IMaintenance[]
		>;
	}

	constructor(
		private adapter: MaintenanceAdapter,
		private appStateService: AppStateService,
		private firestoreService: FirestoreService
	) {}
}
