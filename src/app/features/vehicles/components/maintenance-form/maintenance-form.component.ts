import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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

	constructor(private vehicleFormService: VehicleFormService) {}

	removeMaintenance() {
		const { vehicleFormService, index } = this;
		vehicleFormService.removeMaintenance(index);
	}
}
