import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DEFAULT_DATE_FORMAT } from '@core/constants/app-state.constant';
import { IMaintenance } from '@core/interfaces/maintenance.interface';

@Component({
	selector: 'app-maintenance-item',
	templateUrl: './maintenance-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceItemComponent {
	@Input()
	maintenance: IMaintenance;

	defaultFormat = DEFAULT_DATE_FORMAT;

	get date(): string {
		return this.maintenance?.date as string;
	}

	get name(): string {
		return this.maintenance?.name;
	}

	get description(): string {
		return this.maintenance?.description;
	}
}
