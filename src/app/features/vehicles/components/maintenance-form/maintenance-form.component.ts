import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';

@Component({
	selector: 'app-maintenance-form',
	templateUrl: './maintenance-form.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceFormComponent {
	@Input() form: FormGroup;
	@Input() index: number;

	get date(): Date {
		return this.form?.get('date').value;
	}

	get elementRef(): ElementRef<HTMLElement> {
		return this.host;
	}

	constructor(private vehicleFormService: VehicleFormService, private host: ElementRef<HTMLElement>) {}

	removeMaintenance() {
		const { vehicleFormService, index } = this;
		vehicleFormService.removeMaintenance(index);
	}
}
