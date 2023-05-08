import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { VALIDATOR_ERROR } from '@shared/constants/validator-errors.constant';
import { Observable, map, take } from 'rxjs';

export function alreadyExistsAsyncValidator(list$: Observable<string[]>): AsyncValidatorFn {
	return (control: AbstractControl): Observable<ValidationErrors | null> => {
		return list$.pipe(
			take(1),
			map(list => {
				if (control && list?.length) {
					const value = control.value;
					return list.includes(value)
						? {
								[VALIDATOR_ERROR.ALREADY_EXISTS]: true,
						  }
						: null;
				}
				return null;
			})
		);
	};
}
