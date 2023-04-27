import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { AuthenticationBridgeService } from '@core/services/authentication/authentication-bridge.service';
import { AuthenticationService } from '@core/services/authentication/authentication.service';
import { CoreModule } from 'src/app/core/core.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CoreModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideMessaging(() => getMessaging()),
		provideStorage(() => getStorage()),
	],
	providers: [
		AuthenticationService,
		AuthenticationBridgeService,
		{
			provide: AuthenticationRepository,
			useExisting: AuthenticationService,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
