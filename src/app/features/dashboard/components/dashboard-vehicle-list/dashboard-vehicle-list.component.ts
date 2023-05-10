import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IVehicle } from '@core/interfaces/vehicle.interface';
import { IGenericTableColumn } from '@shared/components/generic-table/generic-table.component';
import { VehicleLabelPipe } from '@shared/pipes/vehicle-label.pipe';

@Component({
	selector: 'app-dashboard-vehicle-list',
	templateUrl: './dashboard-vehicle-list.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardVehicleListComponent {
	@Input()
	vehicles: IVehicle[] = [];

	constructor(private vehicleLabelPipe: VehicleLabelPipe) {}

	columns: IGenericTableColumn[] = [
		{
			field: 'license',
			label: 'Placa',
		},
		{
			field: 'alias',
			label: 'Apodo',
		},
		{
			field: 'type',
			label: 'Tipo',
		},
	];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get rows(): { [key: string]: any }[] {
		return this.vehicles.map(vehicle => ({ ...vehicle, type: this.vehicleLabelPipe.transform(vehicle.type) }));
	}
}
