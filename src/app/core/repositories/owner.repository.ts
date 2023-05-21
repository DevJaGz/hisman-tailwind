import { IVehicle } from '@core/interfaces/vehicle.interface';
import { Observable } from 'rxjs';
import { IOwner, IUser } from '../interfaces/users.interface';

export abstract class OwnerRepository {
	abstract upsert(user: IUser): Observable<IOwner>;
	abstract addVehicle(vehicle: IVehicle): Observable<IVehicle>;
	abstract editVehicle$(vehicle: IVehicle): Observable<IVehicle>;
	abstract getVehicles$(): Observable<IVehicle[]>;
	abstract removeVehicle$(vehicle: IVehicle): Observable<IVehicle>;
}
