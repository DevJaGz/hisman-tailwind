import { Injectable, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IVehicleForm } from '@features/vehicles/interfaces/vehicle-form.interface';
import { FormModel } from '@shared/models/form.model';

@Injectable({
	providedIn: 'root',
})
export class VehicleFormService extends FormModel {
	constructor(private fb: FormBuilder, ngZone: NgZone) {
		super(ngZone);
	}

	createForm(initValue: IVehicleForm = {} as IVehicleForm) {
		const { fb } = this;
		const form = fb.group({
			license: [initValue.license || null, Validators.required],
			type: [initValue.type || VEHICLE_TYPE.CAR, Validators.required],
			alias: [initValue.alias || null],
		});
		super.afterFormCreated(form);
		return form;
	}
}
