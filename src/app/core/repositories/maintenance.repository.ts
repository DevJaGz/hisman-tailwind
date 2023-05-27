import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';
import { Observable } from 'rxjs';

export abstract class MaintenanceRepository {
	abstract addMaintenance$(formValue: IMaintenanceForm): Observable<IMaintenance>;
}
