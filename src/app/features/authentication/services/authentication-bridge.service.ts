import { Injectable } from '@angular/core';
import { IOwner } from '@core/interfaces/user.interface';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationBridgeService {
	constructor(private repository: AuthenticationRepository) {}

	loginWithGoogleProvider(): Observable<IOwner> {
		return this.repository.loginWithGoogleProvider();
	}

	logOut() {
		return this.repository.logOut();
	}
}
