import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, authState, signInWithPopup, signOut } from '@angular/fire/auth';
import { IUser, IUserCredential } from '@core/interfaces/users.interface';
import { Observable, from, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	constructor(private auth: Auth) {}

	/**
	 * Get the current authentication state of the user.
	 */
	getAuthState$(): Observable<IUser> {
		const { auth } = this;
		if (auth) {
			return authState(auth) as Observable<IUser>;
		}
		return of(null);
	}

	/**
	 * Show the pop-up window to log in with the Google email
	 */
	loginWithGoogleProvider$(): Observable<IUserCredential> {
		const { auth } = this;
		if (auth) {
			const provider = new GoogleAuthProvider();
			provider.setCustomParameters({
				prompt: 'select_account',
			});
			const service = signInWithPopup(auth, provider);
			return from(service) as Observable<IUserCredential>;
		}
		return of();
	}

	/**
	 * Log out the user.
	 * This produces the authentication state be Null.
	 */
	logOut() {
		const { auth } = this;
		if (auth) {
			const service = signOut(auth);
			return from(service);
		}
		return of();
	}
}
