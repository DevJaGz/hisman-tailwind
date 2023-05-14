import { Injectable, NgZone } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMaintenance, IMaintenanceWork } from '@core/interfaces/maintenance.interface';
import { MaintenanceWorkFormService } from '@features/vehicles/services/maintenance-work-form.service';
import { FormModel } from '@shared/models/form.model';

@Injectable({
	providedIn: 'root',
})
export class MaintenanceFormService extends FormModel {
	get form(): FormGroup {
		return this._form;
	}

	get worksFormArray(): FormArray {
		return this._form?.get('works') as FormArray;
	}

	constructor(
		private fb: FormBuilder,
		private maintenanceWorkFormService: MaintenanceWorkFormService,
		ngZone: NgZone
	) {
		super(ngZone);
	}

	override createForm(initValue: IMaintenance = {} as IMaintenance): FormGroup {
		const { fb } = this;
		const form = fb.group({
			name: [initValue.name || null, [Validators.required, Validators.maxLength(20)]],
			price: [initValue.price || null, [Validators.required]],
			location: [initValue.location],
			technicianId: [initValue.technicianId || null],
			technicianName: [initValue.technicianName || null, [Validators.required]],
			works: initValue.works?.length ? this.createMaintenanceWorkFormArray(initValue.works) : fb.array([]),
		});
		super.afterFormCreated(form);
		return form;
	}

	private createMaintenanceWorkFormArray(maintenanceWorks: IMaintenanceWork[]) {
		const { fb, maintenanceWorkFormService } = this;
		return fb.array(
			maintenanceWorks.map(maintenanceWork => fb.group(maintenanceWorkFormService.createForm(maintenanceWork)))
		);
	}
}
