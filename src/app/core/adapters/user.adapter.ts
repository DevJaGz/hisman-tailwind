import { Injectable } from '@angular/core';
import { IOwner, IUser } from '@core/interfaces/users.interface';

@Injectable({
	providedIn: 'root',
})
export class UserAdapter {
	toOwner(user: IUser): IOwner {
		return {
			uid: user.uid,
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

	adaptName(name: string): string {
		const separator = ' ';
		return (
			name
				?.toLowerCase()
				.split(separator)
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(separator) || ''
		);
	}
}
