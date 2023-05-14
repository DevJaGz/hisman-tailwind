import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, QueryList, ViewChildren } from '@angular/core';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { MaintenanceFormComponent } from '@features/vehicles/components/maintenance-form/maintenance-form.component';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';

@Component({
	selector: 'app-vehicle-form',
	templateUrl: './vehicle-form.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleFormComponent {
	@ViewChildren(MaintenanceFormComponent)
	maintenanceComponents: QueryList<MaintenanceFormComponent>;
	vehicleTypeList = [
		{
			value: VEHICLE_TYPE.CAR,
			label: 'Carro',
		},
		{
			value: VEHICLE_TYPE.MOTORBIKE,
			label: 'Moto',
		},
	];

	pushMaintenance() {
		this.formService.pushMaintenance();
	}

	pushMaintenanceAndScroll() {
		this.formService.pushMaintenance();
		this.scrollToLastMaintenance();
	}

	constructor(public formService: VehicleFormService, @Inject(DOCUMENT) private document: Document) {}

	private scrollToLastMaintenance() {
		setTimeout(() => {
			const lastMaintenanceComponent = this.maintenanceComponents.last;
			const element = lastMaintenanceComponent?.elementRef?.nativeElement;
			this.document.defaultView.scroll({
				top: element.offsetTop,
				left: 0,
				behavior: 'smooth',
			});
		}, 0);
	}
}
