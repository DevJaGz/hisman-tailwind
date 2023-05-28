import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DEFAULT_BLOCK_UI_TARGET } from '@core/constants/block-ui.constant';
import { MaintenanceBridgeService } from '@core/services/maintenances/maintenance-bridge.service';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUIService } from 'ng-block-ui';
import { filter, switchMap } from 'rxjs';

export const MAINTENANCE_BY_LICENSE_RESOLVER_KEY = 'maintenances';
export const maintenanceByLicenseResolver = (route: ActivatedRouteSnapshot) => {
	const license = route.paramMap.get('license');
	const appStateService = inject(AppStateService);
	const blockUIService = inject(BlockUIService);
	const maintenanceBridgeService = inject(MaintenanceBridgeService);
	blockUIService.start(DEFAULT_BLOCK_UI_TARGET, 'Obteniendo Mantenimientos...');
	return appStateService.selectOwnerState$.pipe(
		filter(Boolean),
		switchMap(() => {
			blockUIService.stop(DEFAULT_BLOCK_UI_TARGET);
			return maintenanceBridgeService.getMaintenancesByVehicleLicense$(license);
		})
	);
};
