import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppStateService } from '@core/store/app-state.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { skip } from 'rxjs';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
	// Pass instance name to decorator
	@BlockUI('block-ui-view') blockUIView: NgBlockUI;
	owner$ = this.appStateService.selectOwnerState$;

	constructor(private appStateService: AppStateService) {}

	ngOnInit(): void {
		this.blockUIView.start('Obteniendo datos...');
		this.owner$.pipe(skip(1)).subscribe({
			next: () => {
				this.blockUIView.stop();
			},
			// error: () => this.blockUIView.stop(),
		});
	}
}
