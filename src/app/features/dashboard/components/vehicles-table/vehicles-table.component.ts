import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-vehicles-table',
	templateUrl: './vehicles-table.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesTableComponent {}
