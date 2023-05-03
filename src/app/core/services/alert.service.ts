import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IAlert {
	show: boolean;
	message: string;
	title: string;
	type: ALERT_TYPE;
	options: IAlertOption;
}

export interface IAlertOption {
	displayingTime?: number;
}

export enum ALERT_TYPE {
	SUCCES = 'success',
	WARNING = 'warning',
	ERROR = 'error',
	INFO = 'info',
	NULL = 'empty',
}

const initState: IAlert = {
	show: false,
	message: null,
	title: null,
	type: ALERT_TYPE.NULL,
	options: {
		displayingTime: 0,
	},
};

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	private _alertEmitter$ = new BehaviorSubject(initState);
	private setTimeoutRef: ReturnType<typeof setTimeout>;

	get alert$(): Observable<IAlert> {
		return this._alertEmitter$.asObservable();
	}

	showInfo(title: string, message: string, options: IAlertOption = {} as IAlertOption) {
		const currentState = this._alertEmitter$.value;
		this._alertEmitter$.next({
			title,
			message,
			options: {
				...currentState.options,
				...options,
			},
			show: true,
			type: ALERT_TYPE.INFO,
		});
		this.handleTimeout(options);
	}

	showSuccess(title: string, message: string, options: IAlertOption = {} as IAlertOption) {
		const currentState = this._alertEmitter$.value;
		this._alertEmitter$.next({
			title,
			message,
			options: {
				...currentState.options,
				...options,
			},
			show: true,
			type: ALERT_TYPE.SUCCES,
		});
		this.handleTimeout(options);
	}

	closeAlert() {
		this._alertEmitter$.next(initState);
	}

	private handleTimeout(options: IAlertOption) {
		const { displayingTime } = options;
		if (displayingTime > 0) {
			clearTimeout(this.setTimeoutRef);
			this.setTimeoutRef = setTimeout(() => {
				this.closeAlert();
			}, displayingTime);
		}
	}
}
