import { Injectable } from '@angular/core';
import { IOwner, IUser } from '@core/interfaces/users.interface';

@Injectable({
	providedIn: 'root',
})
export class UserAdapter {
	toOwner(user: IUser): IOwner {
		return {
			id: user.uid,
			image: user.photoURL,
			name: user.displayName,
			account: {
				email: user.email,
				emailVerified: user.emailVerified,
				phoneNumber: user.phoneNumber,
				accessToken: user.stsTokenManager.accessToken,
				refreshToken: user.stsTokenManager.refreshToken,
				expirationTime: user.stsTokenManager.expirationTime,
			},
		};
	}
}
