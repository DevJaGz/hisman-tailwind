import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [
    CorePageComponent
  ],
  imports: [CoreRoutingModule, SharedModule],
  exports: [CoreRoutingModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import available only in AppModule'
      );
    }
  }
}
