import { Injectable } from '@angular/core';
import { IOwner, IUser } from '@core/interfaces/users.interface';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { OwnerRepository } from '@core/repositories/owner.repository';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class OwnerBridgeService {
	constructor(private repository: OwnerRepository) {}

	upsert(user: IUser): Observable<IOwner> {
		return this.repository.upsert(user);
	}

	addVehicle(vehicle: IVehicle): Observable<IVehicle> {
		return this.repository.addVehicle(vehicle);
	}

	getVehicles$(): Observable<IVehicle[]> {
		return this.repository.getVehicles$();
	}

	editVehicle$(vehicle: IVehicle): Observable<IVehicle> {
		return this.repository.editVehicle$(vehicle);
	}
}
