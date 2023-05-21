import { Injectable } from '@angular/core';

import { DocumentReference } from '@angular/fire/firestore';
import { UserAdapter } from '@core/adapters/user.adapter';
import { IOwner, IUser } from '@core/interfaces/users.interface';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { AppStateService } from '@core/store/app-state.service';
import { Observable, map, switchMap, take } from 'rxjs';
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

	removeVehicle$(vehicle: IVehicle): Observable<IVehicle> {
		return this.getOwnerDocument$().pipe(
			map(doc => {
				if (doc) {
					const owner = doc.data() as IOwner;
					const docRef = doc.ref as DocumentReference<IOwner>;
					const newOwner = {
						...owner,
						vehicles: owner.vehicles.filter(v => v.license !== vehicle.license),
					};
					this.appStateService.setOwnerState(newOwner);
					this.firestoreService.setDocument<IOwner>(docRef, newOwner);
					return vehicle;
				}
				return null;
			}),
			take(1)
		);
	}

	editVehicle$(vehicle: IVehicle): Observable<IVehicle> {
		return this.getOwnerDocument$().pipe(
			map(doc => {
				if (doc) {
					const owner = doc.data() as IOwner;
					const docRef = doc.ref as DocumentReference<IOwner>;
					const newOwner = {
						...owner,
						vehicles: owner.vehicles.map(v => (v.license === vehicle.license ? vehicle : v)),
					};
					this.appStateService.setOwnerState(newOwner);
					this.firestoreService.setDocument<IOwner>(docRef, newOwner);
					return vehicle;
				}
				return null;
			}),
			take(1)
		);
	}

	getVehicles$(): Observable<IVehicle[]> {
		return this.getOwnerDocument$().pipe(
			map(doc => {
				if (doc) {
					const owner = doc.data() as IOwner;
					this.appStateService.setOwnerState(owner);
					return owner.vehicles;
				}
				return null;
			}),
			take(1)
		);
	}

	addVehicle(vehicle: IVehicle): Observable<IVehicle> {
		return this.getOwnerDocument$().pipe(
			map(doc => {
				if (doc) {
					const owner = doc.data() as IOwner;
					const docRef = doc.ref as DocumentReference<IOwner>;
					const newOwner: IOwner = {
						...owner,
						vehicles: [...owner.vehicles, vehicle],
					};
					this.appStateService.setOwnerState(newOwner);
					this.firestoreService.setDocument<IOwner>(docRef, newOwner);
					return vehicle;
				}
				return null;
			}),
			take(1)
		);
	}

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

	private getOwnerDocument$() {
		const { firestoreService, collectionName } = this;
		return this.appStateService.selectOwnerState$.pipe(
			switchMap(({ uid }) => {
				return firestoreService.getDocumentByUID(collectionName, uid).pipe(take(1));
			})
		);
	}
}
