import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IVehicle } from '@core/interfaces/vehicle.interface';

@Component({
	selector: 'app-dashboard-vehicle-card-item',
	templateUrl: './dashboard-vehicle-card-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardVehicleCardItemComponent {
	@Input() vehicle: IVehicle;
}
