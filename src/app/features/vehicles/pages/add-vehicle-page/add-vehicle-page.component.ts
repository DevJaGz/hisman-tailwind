import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertService } from '@core/services/alert.service';
import { OwnerBridgeService } from '@core/services/owner/owner-bridge.service';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

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
		private alertService: AlertService
	) {}

	ngOnInit() {
		this.form = this.formService.createForm();
	}

	submitForm() {
		const vehicle = this.formService.value;
		this.blockUI.start('Añadiendo Vehículo...');
		this.ownerBridgeService.addVehicle(vehicle).subscribe({
			complete: () => {
				this.blockUI.stop();
				this.alertService.showSuccess('Excelente!', 'Tu vehículo ha sido agregado.', {
					displayingTime: 8000,
				});
			},
		});
	}
}
