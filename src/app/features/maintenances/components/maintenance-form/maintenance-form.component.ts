import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MaintenanceFormService } from '@features/maintenances/services/maintenance-form.service';

@Component({
	selector: 'app-maintenance-form',
	templateUrl: './maintenance-form.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceFormComponent implements OnInit {
	form: FormGroup;

	get date(): Date {
		return this.form?.get('date').value;
	}

	get elementRef(): ElementRef<HTMLElement> {
		return this.host;
	}

	constructor(private formService: MaintenanceFormService, private host: ElementRef<HTMLElement>) {}

	ngOnInit(): void {
		this.form = this.formService.createForm();
	}
}
