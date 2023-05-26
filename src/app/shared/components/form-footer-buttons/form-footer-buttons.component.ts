import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { FormModel } from '@shared/models/form.model';

@Component({
	selector: 'app-form-footer-buttons',
	templateUrl: './form-footer-buttons.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFooterButtonsComponent {
	@Input()
	isEditBehavior = false;
	@Input()
	cancelRoute: string | string[] = [CORE_ROUTE_NAMES.VEHICLES];
	@Input()
	formService: FormModel;
	@Input()
	cancelLabel = 'Cancelar';
	@Input()
	editLabel = 'Editar';
	@Input()
	addLabel = 'Añadir';
	@Output()
	submitForm = new EventEmitter<void>();

	constructor(private router: Router) {}

	cancel() {
		if (Array.isArray(this.cancelRoute)) {
			this.router.navigate(this.cancelRoute);
			return;
		}
		this.router.navigateByUrl(this.cancelRoute);
	}

	submit() {
		this.submitForm.emit();
	}
}
