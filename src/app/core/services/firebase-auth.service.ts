import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	constructor(private auth: Auth) {}

	loginWithGoogleEmailProvider(): Observable<UserCredential> {
		const signInProvider = signInWithPopup(this.auth, new GoogleAuthProvider());
		return from(signInProvider);
	}
}
