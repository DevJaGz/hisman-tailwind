import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { IOwner } from '@core/interfaces/users.interface';

export interface IAppState {
	owner: IOwner;
	maintenances: {
		[key: string]: IMaintenance[];
	};
}
