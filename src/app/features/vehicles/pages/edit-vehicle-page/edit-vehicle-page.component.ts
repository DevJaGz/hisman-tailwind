import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { VehicleFormService } from '@features/vehicles/services/vehicle-form.service';
import { VEHICLE_BY_LICENSE_RESOLVER_KEY } from '@shared/resolvers/vehicle-by-license.resolver';

@Component({
	selector: 'app-edit-vehicle-page',
	templateUrl: './edit-vehicle-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditVehiclePageComponent implements OnInit {
	form: FormGroup;
	vehicle: IVehicle;

	constructor(public formService: VehicleFormService, private route: ActivatedRoute) {}
	ngOnInit(): void {
		const vehicle = this.route.snapshot.data[VEHICLE_BY_LICENSE_RESOLVER_KEY];
		this.form = this.formService.createForm(vehicle);
	}
}
