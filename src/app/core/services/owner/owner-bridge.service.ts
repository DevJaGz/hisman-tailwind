import { Injectable } from '@angular/core';
import { IOwner, IUser } from '@core/interfaces/users.interface';
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
}
