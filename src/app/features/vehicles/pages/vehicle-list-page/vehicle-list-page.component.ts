import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { VEHICLES_ROUTE_NAMES } from '@features/vehicles/vehicles-routing.module';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AppStateService } from '../../../../core/store/app-state.service';

@Component({
	selector: 'app-vehicle-list-page',
	templateUrl: './vehicle-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListPageComponent {
	@BlockUI() blockUI: NgBlockUI;
	vehicles$ = this.appStateService.selectVehicles$;
	constructor(private router: Router, private appStateService: AppStateService) {}

	addNewVehicle() {
		this.router.navigate([CORE_ROUTE_NAMES.VEHICLES, VEHICLES_ROUTE_NAMES.ADD]);
	}
}
