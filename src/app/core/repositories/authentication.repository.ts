import { IOwner } from '@core/interfaces/users.interface';
import { Observable } from 'rxjs';

export abstract class AuthenticationRepository {
	abstract loginWithGoogleProvider(): Observable<IOwner>;
	abstract logOut(): Observable<void>;
}
