import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';

@Component({
	selector: 'app-edit-vehicle-page',
	templateUrl: './edit-vehicle-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditVehiclePageComponent implements OnInit {
	form: FormGroup;

	constructor(public formService: VehicleFormService) {}
	ngOnInit(): void {
		this.form = this.formService.createForm();
	}
}
