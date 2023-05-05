import { Injectable } from '@angular/core';
import { IDocument } from '@core/interfaces/document.interface';
import { IOwner, IUser, IUserOwner } from '@core/interfaces/users.interface';
import { IVehicle } from '@core/interfaces/vehicle.interface';

@Injectable({
	providedIn: 'root',
})
export class UserAdapter {
	toPartalOwner(user: IUser): IUserOwner {
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

	toNewOwner(user: IUser): IOwner {
		return {
			...this.toPartalOwner(user),
			vehicles: [] as IVehicle[],
			documents: [] as IDocument[],
		};
	}

	toUpdateOwner(user: IUser, owner: IOwner): IOwner {
		return {
			...this.toPartalOwner(user),
			vehicles: owner.vehicles,
			documents: owner.documents,
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
