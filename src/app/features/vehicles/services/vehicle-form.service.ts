import { Injectable, NgZone } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStateService } from '@core/store/app-state.service';
import { DEFAULT_VEHICLE_FORM_VALUE } from '@features/vehicles/constants/vehicle-form.constant';
import { IVehicleForm } from '@features/vehicles/interfaces/vehicle-form.interface';
import { VALIDATOR_ERROR } from '@shared/constants/validator-errors.constant';
import { FormModel } from '@shared/models/form.model';
import { alreadyExistsAsyncValidator } from '@shared/validators/already-exists-async.validator';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class VehicleFormService extends FormModel {
	get form(): FormGroup {
		return this._form;
	}

	get value(): IVehicleForm {
		return this._form.value;
	}

	get rawValue(): IVehicleForm {
		return this._form.getRawValue();
	}

	get licenseControl(): AbstractControl {
		return this._form?.get('license');
	}

	get hasLicenseAlreadyExistError(): boolean {
		return this.licenseControl?.hasError(VALIDATOR_ERROR.ALREADY_EXISTS);
	}

	constructor(private fb: FormBuilder, private appStateService: AppStateService, ngZone: NgZone) {
		super(ngZone);
	}

	private vehicleLinceseList$ = this.appStateService.selectVehicles$.pipe(
		map(vehicleList => vehicleList?.map(vehicle => vehicle.license))
	);

	override createForm(initValue: IVehicleForm = {} as IVehicleForm, isEditBehavior = false): FormGroup {
		const { fb } = this;
		const form = fb.group({
			license: [
				{
					value: initValue.license || DEFAULT_VEHICLE_FORM_VALUE.license,
					disabled: isEditBehavior,
				},
				[Validators.required, Validators.maxLength(10)],
			],
			type: [initValue.type || DEFAULT_VEHICLE_FORM_VALUE.type, Validators.required],
			alias: [initValue.alias || DEFAULT_VEHICLE_FORM_VALUE.alias, [Validators.maxLength(20)]],
			documents: [initValue.documents || DEFAULT_VEHICLE_FORM_VALUE.documents],
		});
		if (!isEditBehavior) {
			form.get('license').setAsyncValidators(alreadyExistsAsyncValidator(this.vehicleLinceseList$));
		}
		super.afterFormCreated(form);
		return form;
	}
}
