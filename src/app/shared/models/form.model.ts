import { NgZone } from '@angular/core';
import { FormControlStatus, FormGroup } from '@angular/forms';
import { VALIDATOR_ERROR } from '@shared/constants/validator-errors.constant';
import { Observable } from 'rxjs';

export abstract class FormModel {
	abstract createForm(): FormGroup;

	get formStatus$(): Observable<FormControlStatus> {
		return this._form.statusChanges;
	}

	get isDirty(): boolean {
		return this._form.dirty;
	}

	hasControlRequiredError(controlName: string): boolean {
		const control = this._form?.get(controlName);
		return control?.hasError(VALIDATOR_ERROR.REQUIRED) && control.dirty;
	}

	hasControlMaxlengthError(controlName: string): boolean {
		const control = this._form?.get(controlName);
		return control?.hasError(VALIDATOR_ERROR.MAX_LENGTH) && control.dirty;
	}

	hasControlMinError(controlName: string): boolean {
		const control = this._form?.get(controlName);
		return control?.hasError(VALIDATOR_ERROR.MIN) && control.dirty;
	}

	reset(value?: unknown) {
		value ? this._form.reset(value) : this._form.reset();
	}

	protected _form: FormGroup;

	protected afterFormCreated(form: FormGroup) {
		this.registerForm(form);
		this.emitInitialValue();
	}

	constructor(private ngZone: NgZone) {}

	private registerForm(form: FormGroup) {
		this._form = form;
	}

	private emitInitialValue() {
		this.ngZone.runOutsideAngular(() => {
			setTimeout(() => this._form.updateValueAndValidity(), 0);
		});
	}
}
