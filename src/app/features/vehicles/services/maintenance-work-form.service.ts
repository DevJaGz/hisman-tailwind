import { Injectable, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMaintenanceWork } from '@core/interfaces/maintenance.interface';
import { FormModel } from '@shared/models/form.model';

@Injectable({
	providedIn: 'root',
})
export class MaintenanceWorkFormService extends FormModel {
	get form(): FormGroup {
		return this._form;
	}
	constructor(private fb: FormBuilder, ngZone: NgZone) {
		super(ngZone);
	}

	override createForm(initValue: IMaintenanceWork = {} as IMaintenanceWork): FormGroup {
		const { fb } = this;
		const form = fb.group({
			description: [initValue.description || null, [Validators.required]],
			images: [initValue.images || []],
		});
		super.afterFormCreated(form);
		return form;
	}
}
