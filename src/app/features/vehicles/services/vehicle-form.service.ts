import { Injectable, NgZone } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { AppStateService } from '@core/store/app-state.service';
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
					value: initValue.license || null,
					disabled: isEditBehavior,
				},
				[Validators.required, Validators.maxLength(10)],
			],
			type: [initValue.type || VEHICLE_TYPE.CAR, Validators.required],
			alias: [initValue.alias || null, [Validators.maxLength(20)]],
			documents: [initValue.documents || []],
		});
		if (!isEditBehavior) {
			form.get('license').setAsyncValidators(alreadyExistsAsyncValidator(this.vehicleLinceseList$));
		}
		super.afterFormCreated(form);
		return form;
	}
}
