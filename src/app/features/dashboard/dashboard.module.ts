import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { VehicleLabelPipe } from '@shared/pipes/vehicle-label.pipe';
import { SharedModule } from '@shared/shared.module';
import { BlockUIModule } from 'ng-block-ui';
import { DashboardVehicleListComponent } from './components/dashboard-vehicle-list/dashboard-vehicle-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardVehicleCardListComponent } from './components/dashboard-vehicle-card-list/dashboard-vehicle-card-list.component';
import { DashboardVehicleCardItemComponent } from './components/dashboard-vehicle-card-item/dashboard-vehicle-card-item.component';

@NgModule({
	declarations: [
		DashboardPageComponent,
		DashboardVehicleListComponent,
		DashboardVehicleCardListComponent,
		DashboardVehicleCardItemComponent,
	],
	imports: [CommonModule, DashboardRoutingModule, SharedModule, BlockUIModule],
	providers: [VehicleLabelPipe],
})
export class DashboardModule {}
