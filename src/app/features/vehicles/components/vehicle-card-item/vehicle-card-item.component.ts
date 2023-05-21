import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { AlertService } from '@core/services/alert.service';
import { OwnerBridgeService } from '@core/services/owner/owner-bridge.service';
import { VEHICLES_ROUTE_NAMES } from '@features/vehicles/vehicles-routing.module';
import { removeRouteParams } from '@shared/utils/routes.util';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-vehicle-card-item',
	templateUrl: './vehicle-card-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleCardItemComponent {
	@BlockUI() blockUI: NgBlockUI;
	@Input() vehicle: IVehicle;

	get isCar() {
		return this.vehicle?.type === VEHICLE_TYPE.CAR;
	}

	constructor(
		private router: Router,
		private ownerBridgeService: OwnerBridgeService,
		private alertService: AlertService
	) {}

	editVehicle() {
		this.blockUI.start('Cargando...');
		this.router.navigate([
			CORE_ROUTE_NAMES.VEHICLES,
			removeRouteParams(VEHICLES_ROUTE_NAMES.EDIT),
			this.vehicle?.license,
		]);
	}

	removeVehicle() {
		this.blockUI.start('Eliminando Vehículo...');
		this.ownerBridgeService.removeVehicle$(this.vehicle).subscribe({
			complete: () => {
				this.blockUI.stop();
				this.alertService.showSuccess('!Excelente!', 'Tu vehículo ha sido eliminado.', {
					displayingTime: 8000,
				});
			},
		});
	}
}
