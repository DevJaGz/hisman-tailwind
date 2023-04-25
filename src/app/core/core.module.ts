import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [CoreRoutingModule, SharedModule],
})
export class CoreModule {}
