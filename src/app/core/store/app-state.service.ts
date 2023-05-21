import { Injectable } from '@angular/core';
import { DEFAULT_APP_STATE } from '@core/constants/app-state.constant';
import { IAppState } from '@core/interfaces/app-state.interface';
import { IOwner } from '@core/interfaces/users.interface';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AppStateService {
	private appState$: BehaviorSubject<IAppState> = new BehaviorSubject<IAppState>(DEFAULT_APP_STATE);

	get selectOwnerState$(): Observable<IOwner> {
		return this.appState$.asObservable().pipe(map(state => state.owner));
	}

	get selectVehicles$(): Observable<IVehicle[]> {
		return this.selectOwnerState$.pipe(
			map(owner => {
				return owner?.vehicles;
			})
		);
	}

	selectVehicle$(license: string): Observable<IVehicle> {
		return this.selectVehicles$.pipe(map(vehicles => vehicles.find(vehicle => vehicle.license === license)));
	}

	setOwnerState(partialOwner: Partial<IOwner>) {
		this.setPartialAppState<IOwner>('owner', partialOwner);
	}

	private setPartialAppState<K>(appPropertyName: keyof IAppState, value: Partial<K>) {
		const currentAppState = this.appState$.value;
		this.appState$.next({
			...currentAppState,
			[appPropertyName]: {
				...currentAppState[appPropertyName],
				...value,
			},
		});
	}
}
