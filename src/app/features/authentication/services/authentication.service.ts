import { Injectable } from '@angular/core';
import { IOwner } from '@core/interfaces/user.interface';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { FirebaseAuthService } from '@core/services/firebase-auth.service';
import { Observable, map } from 'rxjs';

@Injectable()
export class AuthenticationService implements AuthenticationRepository {
	constructor(private firebaseAuthService: FirebaseAuthService) {}
	logOut(): Observable<void> {
		return this.firebaseAuthService.logOut();
	}

	loginWithGoogleProvider(): Observable<IOwner> {
		return this.firebaseAuthService.loginWithGoogleProvider$().pipe(
			map(res => {
				return {
					email: res?.user?.email,
				};
			})
		);
	}
}
