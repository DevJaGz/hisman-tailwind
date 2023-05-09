import { User, UserCredential } from '@angular/fire/auth';
import { IDocument } from '@core/interfaces/document.interface';
import { IVehicle } from '@core/interfaces/vehicle.interface';

export interface IUserCredential extends UserCredential {
	user: IUser;
}

export interface IUser extends User {
	stsTokenManager: IStsTokenManager;
}

export interface IStsTokenManager {
	accessToken: string;
	refreshToken: string;
	expirationTime: number;
}

export interface IUserOwner {
	uid?: string;
	name: string;
	image: string;
	email: string;
	account: IAccount;
}

export interface IOwner extends IUserOwner {
	vehicles: IVehicle[];
	documents: IDocument[];
}

export interface IAccount {
	email: string;
	emailVerified: boolean;
	phoneNumber: string;
	accessToken?: string;
	refreshToken?: string;
	expirationTime?: number;
}
