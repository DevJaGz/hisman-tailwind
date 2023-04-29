import { Observable } from 'rxjs';
import { IOwner } from '../interfaces/users.interface';

export abstract class OwnerRepository {
	abstract upsert(owner: IOwner): Observable<IOwner>;
}
