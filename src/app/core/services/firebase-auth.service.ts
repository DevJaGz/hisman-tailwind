import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup, signOut } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	constructor(private auth: Auth) {}

	loginWithGoogleProvider$(): Observable<UserCredential> {
		const { auth } = this;
		if (auth) {
			const provider = new GoogleAuthProvider();
			provider.setCustomParameters({
				prompt: 'select_account',
			});
			const service = signInWithPopup(auth, provider);
			return from(service);
		}
		return of();
	}

	logOut() {
		const { auth } = this;
		if (auth) {
			const service = signOut(auth);
			return from(service);
		}
		return of();
	}
}
