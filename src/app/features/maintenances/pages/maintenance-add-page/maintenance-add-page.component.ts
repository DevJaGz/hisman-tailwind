import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MIDIUM_DURATION } from '@core/constants/alert.constant';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { AlertService } from '@core/services/alert.service';
import { MaintenanceBridgeService } from '@core/services/maintenances/maintenance-bridge.service';
import { AppStateService } from '@core/store/app-state.service';
import { DEFAULT_MAINTENANCE_FORM_VALUE } from '@features/maintenances/constans/maintenance-form.constant';
import { MaintenanceFormService } from '@features/maintenances/services/maintenance-form.service';
import { VEHICLES_ROUTE_NAMES } from '@features/vehicles/vehicles-routing.module';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';
import { removeRouteParams } from '@shared/utils/routes.util';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-maintenance-add-page',
	templateUrl: './maintenance-add-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceAddPageComponent implements OnInit {
	// Decorator wires up blockUI instance
	@BlockUI() blockUI: NgBlockUI;
	vehicle: IVehicle;
	cancelRoute: string[];

	submitForm(): void {
		this.blockUI.start('Añadiendo Mantenimiento...');
		const fomValue = this.formService.rawValue;
		this.maintenanceBridgeService
			.addMaintenance$({
				...fomValue,
				vehicleLicense: this.vehicle.license,
			})
			.subscribe({
				next: maintenance => {
					this.blockUI.stop();
					this.appStateService.pushMaintenanceState(maintenance);
					console.log('State', this.appStateService.selectAppState);

					this.formService.reset(DEFAULT_MAINTENANCE_FORM_VALUE);
					this.alertService.showSuccess('!Excelente!', 'Tu Mantenimiento ha sido añadido.', {
						displayingTime: MIDIUM_DURATION,
					});
				},
			});
	}

	constructor(
		public formService: MaintenanceFormService,
		private route: ActivatedRoute,
		private maintenanceBridgeService: MaintenanceBridgeService,
		private alertService: AlertService,
		private appStateService: AppStateService
	) {}

	ngOnInit(): void {
		this.vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
		this.cancelRoute = [
			CORE_ROUTE_NAMES.VEHICLES,
			this.vehicle.license,
			removeRouteParams(VEHICLES_ROUTE_NAMES.MAINTENANCES),
		];
	}
}
