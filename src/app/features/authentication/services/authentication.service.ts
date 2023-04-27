import { Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FirebaseAuthService } from '@core/services/firebase-auth.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	constructor(private firebaseAuthService: FirebaseAuthService) {}

	loginWithGoogleEmailProvider(): Observable<UserCredential> {
		return this.firebaseAuthService.loginWithGoogleEmailProvider();
	}
}
