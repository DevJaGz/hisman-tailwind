import { Injectable, NgZone } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VEHICLE_TYPE } from '@core/constants/vehicle.constant';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { AppStateService } from '@core/store/app-state.service';
import { IVehicleForm } from '@features/vehicles/interfaces/vehicle-form.interface';
import { MaintenanceFormService } from '@features/vehicles/services/maintenance-form.service';
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

	get maintenancesFormArray(): FormArray {
		return this._form?.get('maintenances') as FormArray;
	}

	get maintenanceForms(): FormGroup[] {
		return this.maintenancesFormArray?.controls as FormGroup[];
	}

	get licenseControl(): AbstractControl {
		return this._form?.get('license');
	}

	get hasLicenseAlreadyExistError(): boolean {
		return this.licenseControl?.hasError(VALIDATOR_ERROR.ALREADY_EXISTS);
	}

	pushMaintenance() {
		this.maintenancesFormArray.push(this.maintenanceFormService.createForm());
	}

	removeMaintenance(index: number) {
		this.maintenancesFormArray.removeAt(index);
	}

	constructor(
		private fb: FormBuilder,
		private appStateService: AppStateService,
		private maintenanceFormService: MaintenanceFormService,
		ngZone: NgZone
	) {
		super(ngZone);
	}

	private vehicleLinceseList$ = this.appStateService.selectVehicles$.pipe(
		map(vehicleList => vehicleList?.map(vehicle => vehicle.license))
	);

	override createForm(initValue: IVehicleForm = {} as IVehicleForm): FormGroup {
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
			maintenances: initValue.maintenances?.length
				? this.createMaintenanceFormArray(initValue.maintenances)
				: fb.array([]),
		});
		super.afterFormCreated(form);
		return form;
	}

	private createMaintenanceFormArray(maintenances: IMaintenance[]) {
		const { fb, maintenanceFormService } = this;
		return fb.array(maintenances.map(maintenance => fb.group(maintenanceFormService.createForm(maintenance))));
	}
}
