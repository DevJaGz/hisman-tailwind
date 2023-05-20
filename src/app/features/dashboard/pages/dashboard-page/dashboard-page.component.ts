import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTE_NAMES } from '@core/core-routing.module';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { filter, take } from 'rxjs';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	owner$ = this.appStateService.selectOwnerState$;
	constructor(private appStateService: AppStateService, private router: Router) {}

	ngOnInit(): void {
		this.blockUI.start('Obteniendo datos...');
		this.owner$.pipe(filter(Boolean), take(1)).subscribe({
			next: () => {
				this.blockUI.stop();
			},
			error: () => this.blockUI.stop(),
		});
	}

	addVehicle() {
		this.router.navigate([CORE_ROUTE_NAMES.VEHICLES]);
	}
}
