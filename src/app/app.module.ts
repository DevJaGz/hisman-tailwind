import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AuthenticationRepository } from '@core/repositories/authentication.repository';
import { OwnerRepository } from '@core/repositories/owner.repository';
import { AuthenticationService } from '@core/services/authentication/authentication.service';
import { OwnerService } from '@core/services/owner/owner.service';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideMessaging(() => getMessaging()),
		provideStorage(() => getStorage()),
	],
	providers: [
		{
			provide: AuthenticationRepository,
			useExisting: AuthenticationService,
		},
		{
			provide: OwnerRepository,
			useExisting: OwnerService,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
