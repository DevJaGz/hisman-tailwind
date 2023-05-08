import { Injectable, NgZone } from '@angular/core';
import { FormBuilder, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IVehicleForm } from '@features/vehicles/interfaces/vehicle-form.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class VehicleFormService {
	private _form: FormGroup;

	get form(): FormGroup {
		return this._form;
	}

	get value(): IVehicleForm {
		return this._form.value;
	}

	get formStatus$(): Observable<FormControlStatus> {
		return this._form.statusChanges;
	}

	constructor(private fb: FormBuilder, private ngZone: NgZone) {}

	createForm(initValue: IVehicleForm = {} as IVehicleForm) {
		const { fb } = this;
		const form = fb.group({
			license: [initValue.license || null, Validators.required],
			type: [initValue.type || VEHICLE_TYPE.CAR, Validators.required],
			alias: [initValue.alias || null],
		});
		this.setForm(form);
		this.emitInitialValue();
		return form;
	}

	private setForm(form: FormGroup) {
		this._form = form;
	}

	private emitInitialValue() {
		this.ngZone.runOutsideAngular(() => {
			setTimeout(() => this._form.updateValueAndValidity(), 0);
		});
	}
}
