import { Injectable } from '@angular/core';
import { UserAdapter } from '@core/adapters/user.adapter';
import { IUser, IUserCredential } from '@core/interfaces/users.interface';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { FirebaseAuthService } from '@core/services/firebase/firebase-auth.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService implements AuthenticationRepository {
	constructor(private firebaseAuthService: FirebaseAuthService, private userAdapter: UserAdapter) {}

	/**
	 * Get the authentication state of the owner.
	 * Return Null if the owner has not been authenticated.
	 */
	getAuthState$(): Observable<IUser> {
		return this.firebaseAuthService.getAuthState$();
	}

	/**
	 * Log out the owner from the app
	 */
	logOut$(): Observable<void> {
		return this.firebaseAuthService.logOut();
	}

	/**
	 * Log in the owner using the google email provider
	 */
	loginWithGoogleProvider$(): Observable<IUserCredential> {
		return this.firebaseAuthService.loginWithGoogleProvider$();
	}
}
