import { Injectable } from '@angular/core';
import { IUser, IUserCredential } from '@core/interfaces/users.interface';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationBridgeService {
	constructor(private repository: AuthenticationRepository) {}

	loginWithGoogleProvider$(): Observable<IUserCredential> {
		return this.repository.loginWithGoogleProvider$();
	}

	logOut$(): Observable<void> {
		return this.repository.logOut$();
	}

	getState$(): Observable<IUser> {
		return this.repository.getAuthState$();
	}
}
