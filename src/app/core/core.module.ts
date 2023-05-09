import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NavSkeletonComponent } from './components/nav-skeleton/nav-skeleton.component';
import { NavComponent } from './components/nav/nav.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
	declarations: [CorePageComponent, NavSkeletonComponent, NavComponent],
	imports: [CommonModule, CoreRoutingModule, SharedModule],
	exports: [CoreRoutingModule],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import available only in AppModule');
		}
	}
}
