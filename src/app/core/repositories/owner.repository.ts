import { Observable } from 'rxjs';
import { IOwner, IUser } from '../interfaces/users.interface';

export abstract class OwnerRepository {
	abstract upsert(user: IUser): Observable<IOwner>;
}
