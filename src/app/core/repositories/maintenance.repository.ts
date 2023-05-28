import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { Observable } from 'rxjs';

export abstract class MaintenanceRepository {
	abstract addMaintenance$(formValue: Partial<IMaintenance>): Observable<IMaintenance>;
}
