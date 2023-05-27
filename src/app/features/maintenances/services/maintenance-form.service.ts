import { Injectable, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { DEFAULT_MAINTENANCE_FORM_VALUE } from '@features/maintenances/constans/maintenance-form.constant';
import { IMaintenanceForm } from '@features/maintenances/interfaces/maintenance-form.interface';
import { FormModel } from '@shared/models/form.model';

@Injectable({
	providedIn: 'root',
})
export class MaintenanceFormService extends FormModel {
	get form(): FormGroup {
		return this._form;
	}

	get value(): IMaintenanceForm {
		return this._form.value;
	}

	get rawValue(): IMaintenanceForm {
		return this._form.getRawValue();
	}

	constructor(private fb: FormBuilder, ngZone: NgZone) {
		super(ngZone);
	}

	override createForm(initValue: IMaintenance = {} as IMaintenance): FormGroup {
		const { fb } = this;
		const form = fb.group({
			name: [
				initValue.name || DEFAULT_MAINTENANCE_FORM_VALUE.name,
				[Validators.required, Validators.maxLength(20)],
			],
			price: [initValue.price || DEFAULT_MAINTENANCE_FORM_VALUE.price, [Validators.required, Validators.min(0)]],
			date: [initValue.date ? new Date(initValue.date) : new Date()],
			location: [initValue.location || DEFAULT_MAINTENANCE_FORM_VALUE.location, Validators.maxLength(30)],
			technicianId: [initValue.technicianId || DEFAULT_MAINTENANCE_FORM_VALUE.technicianId],
			technicianName: [
				initValue.technicianName || DEFAULT_MAINTENANCE_FORM_VALUE.technicianName,
				Validators.maxLength(30),
			],
			description: [
				initValue.description || DEFAULT_MAINTENANCE_FORM_VALUE.description,
				Validators.maxLength(500),
			],
		});
		super.afterFormCreated(form);
		return form;
	}
}
