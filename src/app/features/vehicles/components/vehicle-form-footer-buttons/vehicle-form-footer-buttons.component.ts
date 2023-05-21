import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-vehicle-form-footer-buttons',
	templateUrl: './vehicle-form-footer-buttons.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleFooterButtonsComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	@Input() isEditBehavior = false;
	@Output()
	submitForm = new EventEmitter<void>();

	ngOnInit(): void {
		this.blockUI.stop();
	}

	constructor(private router: Router, public formService: VehicleFormService) {}

	cancel() {
		this.router.navigate([CORE_ROUTE_NAMES.VEHICLES]);
	}

	submit() {
		this.submitForm.emit();
	}
}
