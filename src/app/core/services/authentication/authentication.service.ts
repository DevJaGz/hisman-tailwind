import { Injectable } from '@angular/core';
import { UserAdapter } from '@core/adapters/user.adapter';
import { IOwner } from '@core/interfaces/users.interface';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { FirebaseAuthService } from '@core/services/firebase/firebase-auth.service';
import { Observable, map } from 'rxjs';

@Injectable()
export class AuthenticationService implements AuthenticationRepository {
	constructor(private firebaseAuthService: FirebaseAuthService, private userAdapter: UserAdapter) {}

	/**
	 * Get the authentication state of the owner.
	 * Return Null if the owner has not been authenticated.
	 */
	getAuthState$(): Observable<IOwner> {
		return this.firebaseAuthService.getAuthState$().pipe(
			map(user => {
				return user ? this.userAdapter.toOwner(user) : null;
			})
		);
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
	loginWithGoogleProvider$(): Observable<IOwner> {
		return this.firebaseAuthService.loginWithGoogleProvider$().pipe(
			map(res => {
				return res ? this.userAdapter.toOwner(res.user) : null;
			})
		);
	}
}
