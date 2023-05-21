import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { AlertService } from '@core/services/alert.service';
import { OwnerBridgeService } from '@core/services/owner/owner-bridge.service';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-edit-vehicle-page',
	templateUrl: './edit-vehicle-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditVehiclePageComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	form: FormGroup;
	vehicle: IVehicle;
	isEditBehavior = true;

	constructor(
		public formService: VehicleFormService,
		private route: ActivatedRoute,
		private ownerBridgeService: OwnerBridgeService,
		private alertService: AlertService,
		private router: Router
	) {}

	ngOnInit(): void {
		const vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
		this.form = this.formService.createForm(vehicle, this.isEditBehavior);
	}

	submitForm() {
		const vehicle = this.formService.rawValue;
		this.blockUI.start('Editando Vehículo...');
		this.ownerBridgeService.editVehicle$(vehicle).subscribe({
			complete: () => {
				this.blockUI.stop();
				this.alertService.showSuccess('!Excelente!', 'Tu vehículo ha sido editado.', {
					displayingTime: 8000,
				});
				this.router.navigate([CORE_ROUTE_NAMES.DASHBOARD]);
			},
		});
	}
}
