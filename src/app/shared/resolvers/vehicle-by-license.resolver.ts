import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DEFAULT_BLOCK_UI_TARGET } from '@core/constants/block-ui.constant';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUIService } from 'ng-block-ui';
import { Observable, filter, map, switchMap } from 'rxjs';

export const VEHICLE_BY_LICENSE_RESOLVER_KEY = 'vehicle';

export const vehicleByLicenseResolver = (route: ActivatedRouteSnapshot): Observable<IVehicle> => {
	const license = route?.params?.['license'];
	const appStateService = inject(AppStateService);
	const router = inject(Router);
	const blockUIService = inject(BlockUIService);
	blockUIService.start(DEFAULT_BLOCK_UI_TARGET, 'Obteniendo Vehículo...');

	return appStateService.selectOwnerState$.pipe(
		filter(Boolean),
		switchMap(() => {
			blockUIService.stop(DEFAULT_BLOCK_UI_TARGET);
			return appStateService.selectVehicle$(license).pipe(
				map(vehicle => {
					if (!vehicle) {
						router.navigate([CORE_ROUTE_NAMES.DASHBOARD]);
						return null;
					}
					return vehicle;
				})
			);
		})
	);
};
//
