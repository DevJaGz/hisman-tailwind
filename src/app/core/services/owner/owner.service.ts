import { Injectable } from '@angular/core';

import { DocumentReference } from '@angular/fire/firestore';
import { UserAdapter } from '@core/adapters/user.adapter';
import { IOwner, IUser } from '@core/interfaces/users.interface';
import { AppStateService } from '@core/store/app-state.service';
import { Observable, switchMap } from 'rxjs';
import { OwnerRepository } from '../../repositories/owner.repository';
import { FirestoreService } from '../firebase/firestore.service';

@Injectable({
	providedIn: 'root',
})
export class OwnerService implements OwnerRepository {
	private collectionName = 'owners';

	constructor(
		private firestoreService: FirestoreService,
		private userAdapter: UserAdapter,
		private appStateService: AppStateService
	) {}

	upsert(user: IUser): Observable<IOwner> {
		const { firestoreService, collectionName } = this;
		const { uid } = user;
		return firestoreService.getDocumentByUID(collectionName, uid).pipe(
			switchMap(doc => {
				if (doc) {
					const owner = doc.data() as IOwner;
					const docRef = doc.ref as DocumentReference<IOwner>;
					const newOwner: IOwner = this.userAdapter.toUpdateOwner(user, owner);
					this.appStateService.setOwnerState(newOwner);
					return this.firestoreService.setDocument<IOwner>(docRef, newOwner);
				}
				const newOwner: IOwner = this.userAdapter.toNewOwner(user);
				this.appStateService.setOwnerState(newOwner);
				return this.firestoreService.createDocumentByUID<IOwner>(collectionName, newOwner);
			})
		);
	}
}
