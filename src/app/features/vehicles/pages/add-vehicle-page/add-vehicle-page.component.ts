import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';

@Component({
	selector: 'app-add-vehicle-page',
	templateUrl: './add-vehicle-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVehiclePageComponent implements OnInit {
	form: FormGroup;

	constructor(public formService: VehicleFormService) {}

	ngOnInit(): void {
		this.form = this.formService.createForm();
	}
}
