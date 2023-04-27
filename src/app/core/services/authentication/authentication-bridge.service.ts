import { Injectable } from '@angular/core';
import { IOwner } from '@core/interfaces/users.interface';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationBridgeService {
	constructor(private repository: AuthenticationRepository) {}

	loginWithGoogleProvider$(): Observable<IOwner> {
		return this.repository.loginWithGoogleProvider$();
	}

	logOut$(): Observable<void> {
		return this.repository.logOut$();
	}

	getState$(): Observable<IOwner> {
		return this.repository.getAuthState$();
	}
}
