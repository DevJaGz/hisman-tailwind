import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { VehicleLabelPipe } from '@shared/pipes/vehicle-label.pipe';
import { SharedModule } from '@shared/shared.module';
import { BlockUIModule } from 'ng-block-ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
	declarations: [DashboardPageComponent],
	imports: [CommonModule, DashboardRoutingModule, SharedModule, BlockUIModule],
	providers: [VehicleLabelPipe],
})
export class DashboardModule {}
