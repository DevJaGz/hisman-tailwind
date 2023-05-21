import { inject } from '@angular/core';
import { DEFAULT_BLOCK_UI_TARGET } from '@core/constants/block-ui.constant';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUIService } from 'ng-block-ui';
import { Observable, filter, switchMap } from 'rxjs';

export const VEHICLES_RESOLVER_KEY = 'vehicles';

export const vehiclesResolver = (): Observable<IVehicle[]> => {
	const appStateService = inject(AppStateService);
	const blockUIService = inject(BlockUIService);
	blockUIService.start(DEFAULT_BLOCK_UI_TARGET, 'Obteniendo Vehículos...');

	return appStateService.selectOwnerState$.pipe(
		filter(Boolean),
		switchMap(() => {
			blockUIService.stop(DEFAULT_BLOCK_UI_TARGET);
			return appStateService.selectVehicles$;
		})
	);
};
//
