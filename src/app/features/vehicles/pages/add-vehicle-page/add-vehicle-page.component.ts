import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertService } from '@core/services/alert.service';
import { OwnerBridgeService } from '@core/services/owner/owner-bridge.service';
import { DEFAULT_VEHICLE_FORM_VALUE } from '@features/vehicles/constants/vehicle-form.constant';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { filter, take } from 'rxjs';
import { AppStateService } from '../../../../core/store/app-state.service';

@Component({
	selector: 'app-add-vehicle-page',
	templateUrl: './add-vehicle-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVehiclePageComponent implements OnInit {
	// Decorator wires up blockUI instance
	@BlockUI() blockUI: NgBlockUI;

	form: FormGroup;

	constructor(
		public formService: VehicleFormService,
		private ownerBridgeService: OwnerBridgeService,
		private alertService: AlertService,
		private appStateService: AppStateService
	) {}

	ngOnInit() {
		this.blockUI.start('Obteniendo Vehículos...');
		this.form = this.formService.createForm();
		this.appStateService.selectVehicles$.pipe(filter(Boolean), take(1)).subscribe({
			next: () => this.blockUI.stop(),
		});
	}

	submitForm() {
		const vehicle = this.formService.value;
		this.blockUI.start('Añadiendo Vehículo...');
		this.ownerBridgeService.addVehicle(vehicle).subscribe({
			complete: () => {
				this.blockUI.stop();
				this.formService.reset(DEFAULT_VEHICLE_FORM_VALUE);
				this.alertService.showSuccess('!Excelente!', 'Tu vehículo ha sido añadido.', {
					displayingTime: 8000,
				});
			},
		});
	}
}
