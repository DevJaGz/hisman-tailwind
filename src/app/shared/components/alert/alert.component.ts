import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ALERT_TYPE, AlertService } from '../../../core/services/alert.service';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
	get show$(): Observable<boolean> {
		return this.alertService.alert$.pipe(map(data => data.show));
	}

	get hidden$(): Observable<boolean> {
		return this.alertService.alert$.pipe(map(data => !data.show));
	}

	get isInfo$(): Observable<boolean> {
		return this.alertService.alert$.pipe(map(data => data.type === ALERT_TYPE.INFO));
	}

	get isSuccess$(): Observable<boolean> {
		return this.alertService.alert$.pipe(map(data => data.type === ALERT_TYPE.SUCCES));
	}

	get title$(): Observable<string> {
		return this.alertService.alert$.pipe(map(data => data.title));
	}

	get message$(): Observable<string> {
		return this.alertService.alert$.pipe(map(data => data.message));
	}

	constructor(private alertService: AlertService) {}

	closeAlert() {
		this.alertService.closeAlert();
	}
}
