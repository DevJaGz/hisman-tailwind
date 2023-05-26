import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenancesRoutingModule } from './maintenances-routing.module';
import { MaintenanceListPageComponent } from './pages/maintenance-list-page/maintenance-list-page.component';
import { MaintenanceAddPageComponent } from './pages/maintenance-add-page/maintenance-add-page.component';
import { MaintenanceEditPageComponent } from './pages/maintenance-edit-page/maintenance-edit-page.component';

@NgModule({
	declarations: [MaintenanceListPageComponent, MaintenanceAddPageComponent, MaintenanceEditPageComponent],
	imports: [CommonModule, MaintenancesRoutingModule],
})
export class MaintenancesModule {}
