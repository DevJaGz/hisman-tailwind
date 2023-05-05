import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
	declarations: [],
	imports: [VehiclesRoutingModule, SharedModule],
})
export class VehiclesModule {}
