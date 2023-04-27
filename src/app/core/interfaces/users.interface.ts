import { User, UserCredential } from '@angular/fire/auth';

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

export interface IOwner {
	id?: string;
	name: string;
	image: string;
	account: IAccount;
}

export interface IAccount {
	email: string;
	emailVerified: boolean;
	phoneNumber: string;
	accessToken?: string;
	refreshToken?: string;
	expirationTime?: number;
}
