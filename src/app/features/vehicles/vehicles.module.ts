import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { AddVehiclePageComponent } from './pages/add-vehicle-page/add-vehicle-page.component';

@NgModule({
	declarations: [AddVehiclePageComponent],
	imports: [VehiclesRoutingModule, SharedModule],
})
export class VehiclesModule {}
