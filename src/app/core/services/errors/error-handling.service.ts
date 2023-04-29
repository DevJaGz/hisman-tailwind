import { Injectable } from '@angular/core';
import { FirebaseErrorService } from '@core/services/firebase/firebase-error.service';

@Injectable({
	providedIn: 'root',
})
export class ErrorHandlingService {
	constructor(private firebaseErrorService: FirebaseErrorService) {}

	handleFirebase<T = unknown>() {
		return this.firebaseErrorService.handle<T>();
	}
}
