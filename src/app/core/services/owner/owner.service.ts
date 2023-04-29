import { Injectable } from '@angular/core';

import { IOwner } from '@core/interfaces/users.interface';
import { Observable } from 'rxjs';
import { OwnerRepository } from '../../repositories/owner.repository';
import { FirestoreService } from '../firebase/firestore.service';

@Injectable({
	providedIn: 'root',
})
export class OwnerService implements OwnerRepository {
	private collectionName = 'owners';

	constructor(private firestoreService: FirestoreService) {}

	upsert(owner: IOwner): Observable<IOwner> {
		const { firestoreService, collectionName } = this;
		return firestoreService.upsertDocument(collectionName, owner) as Observable<IOwner>;
	}
}
