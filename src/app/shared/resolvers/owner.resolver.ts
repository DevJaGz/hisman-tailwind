import { inject } from '@angular/core';
import { DEFAULT_BLOCK_UI_TARGET } from '@core/constants/block-ui.constant';
import { IOwner } from '@core/interfaces/users.interface';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUIService } from 'ng-block-ui';
import { Observable, filter, map } from 'rxjs';

export const OWNER_RESOLVER_KEY = 'vehicles';

export const ownerResolver = (): Observable<IOwner> => {
	const appStateService = inject(AppStateService);
	const blockUIService = inject(BlockUIService);
	blockUIService.start(DEFAULT_BLOCK_UI_TARGET, 'Obteniendo Propietario...');

	return appStateService.selectOwnerState$.pipe(
		filter(Boolean),
		map(owner => {
			blockUIService.stop(DEFAULT_BLOCK_UI_TARGET);
			return owner;
		})
	);
};
