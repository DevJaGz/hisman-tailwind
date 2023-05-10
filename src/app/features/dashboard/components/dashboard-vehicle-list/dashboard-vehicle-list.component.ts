import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppStateService } from '../../../../core/store/app-state.service';

@Component({
	selector: 'app-dashboard-vehicle-list',
	templateUrl: './dashboard-vehicle-list.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardVehicleListComponent {
	vehicles$ = this.appStateService.selectVehicles$;

	constructor(private appStateService: AppStateService) {}
}
