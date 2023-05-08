import { NgZone } from '@angular/core';
import { FormControlStatus, FormGroup } from '@angular/forms';
import { IVehicleForm } from '@features/vehicles/interfaces/vehicle-form.interface';
import { VALIDATOR_ERROR } from '@shared/constants/validator-errors.constant';
import { Observable } from 'rxjs';

export abstract class FormModel {
	abstract createForm(): FormGroup;

	get form(): FormGroup {
		return this._form;
	}

	get value(): IVehicleForm {
		return this._form.value;
	}

	get formStatus$(): Observable<FormControlStatus> {
		return this._form.statusChanges;
	}

	hasControlRequiredError(controlName: string): boolean {
		const control = this._form?.get(controlName);
		return control?.hasError(VALIDATOR_ERROR.REQUIRED) && control.dirty;
	}

	hasControlMaxlengthError(controlName: string): boolean {
		const control = this._form?.get(controlName);
		return control?.hasError(VALIDATOR_ERROR.MAX_LENGTH) && control.dirty;
	}

	protected _form: FormGroup;

	protected afterFormCreated(form: FormGroup) {
		this.setForm(form);
		this.emitInitialValue();
	}

	constructor(private ngZone: NgZone) {}

	private setForm(form: FormGroup) {
		this._form = form;
	}

	private emitInitialValue() {
		this.ngZone.runOutsideAngular(() => {
			setTimeout(() => this._form.updateValueAndValidity(), 0);
		});
	}
}
