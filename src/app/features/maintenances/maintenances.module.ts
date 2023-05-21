import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenancesRoutingModule } from './maintenances-routing.module';
import { MaintenanceListPageComponent } from './pages/maintenance-list-page/maintenance-list-page.component';

@NgModule({
	declarations: [MaintenanceListPageComponent],
	imports: [CommonModule, MaintenancesRoutingModule],
})
export class MaintenancesModule {}
