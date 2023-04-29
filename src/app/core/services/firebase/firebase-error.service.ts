import { Injectable } from '@angular/core';
import { errorReturnType } from '@core/interfaces/error.interface';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class FirebaseErrorService {
	handle<T = unknown>(): errorReturnType<T> {
		return (source: Observable<T>): Observable<T> => {
			return source.pipe(
				catchError(e => {
					console.log('ERROR:', e);

					return EMPTY;
				})
			);
		};
	}
}
