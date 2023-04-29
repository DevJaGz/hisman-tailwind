import { Observable } from 'rxjs';

export type errorReturnType<T> = (source: Observable<T>) => Observable<T>;
