import { Injectable, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMaintenance } from '@core/interfaces/maintenance.interface';
import { FormModel } from '@shared/models/form.model';

@Injectable({
	providedIn: 'root',
})
export class MaintenanceFormService extends FormModel {
	get form(): FormGroup {
		return this._form;
	}

	constructor(private fb: FormBuilder, ngZone: NgZone) {
		super(ngZone);
	}

	override createForm(initValue: IMaintenance = {} as IMaintenance): FormGroup {
		const { fb } = this;
		const form = fb.group({
			name: [initValue.name || null, [Validators.required, Validators.maxLength(20)]],
			price: [initValue.price || 0, [Validators.required, Validators.min(0)]],
			date: [initValue.date ? new Date(initValue.date) : new Date()],
			location: [initValue.location, Validators.maxLength(100)],
			technicianId: [initValue.technicianId || null],
			technicianName: [initValue.technicianName || null],
			description: [initValue.description || null, Validators.maxLength(500)],
		});
		super.afterFormCreated(form);
		return form;
	}
}
