import { Maintenances } from '@core/interfaces/maintenance.interface';
import { IOwner } from '@core/interfaces/users.interface';

export interface IAppState {
	owner: IOwner;
	maintenances: Maintenances;
}
