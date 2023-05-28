import { Injectable } from '@angular/core';
import { DEFAULT_APP_STATE } from '@core/constants/app-state.constant';
import { IAppState } from '@core/interfaces/app-state.interface';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { IOwner } from '@core/interfaces/users.interface';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AppStateService {
	private appState$: BehaviorSubject<IAppState> = new BehaviorSubject<IAppState>(DEFAULT_APP_STATE);

	get selectAppState(): IAppState {
		return this.appState$.value;
	}

	get selectOwnerState(): IOwner {
		return this.appState$.value.owner;
	}

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

	selectMaintenancesByVehicle$(license: string): Observable<IMaintenance[]> {
		return this.appState$
			.asObservable()
			.pipe(
				map(state => state.maintenances[license]?.filter(maintenance => maintenance.vehicleLicense === license))
			);
	}

	selectVehicle$(license: string): Observable<IVehicle> {
		return this.selectVehicles$.pipe(map(vehicles => vehicles.find(vehicle => vehicle.license === license)));
	}

	setOwnerState(partialOwner: Partial<IOwner>) {
		this.setAppStateProperty<IOwner>('owner', partialOwner);
	}

	pushMaintenanceState(maintenance: IMaintenance, validatePropertyName: keyof IMaintenance = 'id') {
		// Get current app state
		const currentAppState = this.appState$.value;
		// Get maintenances by vehicle license
		const currentMaintenances = currentAppState.maintenances[maintenance.vehicleLicense];
		if (currentMaintenances) {
			// Get index of maintenance by validatePropertyName
			const maintenanceIndex = currentMaintenances?.findIndex(
				currentMaintenance => currentMaintenance[validatePropertyName] === maintenance[validatePropertyName]
			);
			if (maintenanceIndex !== -1) {
				// Maintenance is already exist, update it
				currentMaintenances[maintenanceIndex] = maintenance;
			} else {
				// Maintenance is not exist, push it
				currentMaintenances.push(maintenance);
			}
		} else {
			// Create new array of maintenances
			currentAppState.maintenances[maintenance.vehicleLicense] = [maintenance];
		}
	}

	private setAppStateProperty<K>(appPropertyName: keyof IAppState, value: Partial<K>) {
		const currentAppState = this.appState$.value;
		const currentPropertyValue = currentAppState[appPropertyName];
		this.appState$.next({
			...currentAppState,
			[appPropertyName]: {
				...currentPropertyValue,
				...value,
			},
		});
	}
}
