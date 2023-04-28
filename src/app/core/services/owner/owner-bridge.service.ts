import { Injectable } from '@angular/core';
import { IOwner } from '@core/interfaces/users.interface';
import { OwnerRepository } from '@core/repositories/owner.repository';

@Injectable({
	providedIn: 'root',
})
export class OwnerBridgeService {
	constructor(private repository: OwnerRepository) {}

	upsert(owner: IOwner) {
		return this.repository.upsert(owner);
	}
}
