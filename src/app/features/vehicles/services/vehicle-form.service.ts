import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IVehicleForm } from '@features/vehicles/interfaces/vehicle-form.interface';

@Injectable({
	providedIn: 'root',
})
export class VehicleFormService {
	private _form: FormGroup;

	get form(): FormGroup {
		return this._form;
	}

	constructor(private fb: FormBuilder) {}

	createForm(initValue: IVehicleForm = {} as IVehicleForm) {
		const { fb } = this;
		const form = fb.group({
			license: [initValue.license || null, Validators.required],
			type: [initValue.type || VEHICLE_TYPE.CAR, Validators.required],
			alias: [initValue.alias || null],
		});
		this.setForm(form);
		return form;
	}

	private setForm(form: FormGroup) {
		this._form = form;
	}
}
