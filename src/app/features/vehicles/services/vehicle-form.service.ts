import { Injectable, NgZone } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
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

	override createForm(initValue: IVehicleForm = {} as IVehicleForm) {
		const { fb } = this;
		const form = fb.group({
			license: [
				initValue.license || null,
				[Validators.required, Validators.maxLength(10)],
				[alreadyExistsAsyncValidator(this.vehicleLinceseList$)],
			],
			type: [initValue.type || VEHICLE_TYPE.CAR, Validators.required],
			alias: [initValue.alias || null, [Validators.maxLength(20)]],
			documents: [initValue.documents || []],
		});
		super.afterFormCreated(form);
		return form;
	}
}
