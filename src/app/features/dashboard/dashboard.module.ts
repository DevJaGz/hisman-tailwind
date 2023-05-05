import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
	declarations: [DashboardPageComponent],
	imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
