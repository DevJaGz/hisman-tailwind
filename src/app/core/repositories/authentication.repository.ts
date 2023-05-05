import { IUser, IUserCredential } from '@core/interfaces/users.interface';
import { Observable } from 'rxjs';

export abstract class AuthenticationRepository {
	abstract loginWithGoogleProvider$(): Observable<IUserCredential>;
	abstract logOut$(): Observable<void>;
	abstract getAuthState$(): Observable<IUser>;
}
