import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';

@Component({
	selector: 'app-vehicle-form-footer-buttons',
	templateUrl: './vehicle-form-footer-buttons.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleFooterButtonsComponent {
	@Input() isEditBehavior = false;
	@Output()
	submitForm = new EventEmitter<void>();

	constructor(private router: Router, public formService: VehicleFormService) {}

	cancel() {
		this.router.navigate([CORE_ROUTE_NAMES.DASHBOARD]);
	}

	submit() {
		this.submitForm.emit();
	}
}
