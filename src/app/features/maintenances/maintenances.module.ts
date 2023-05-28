import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MaintenanceFormComponent } from '@features/maintenances/components/maintenance-form/maintenance-form.component';
import { SharedModule } from '@shared/shared.module';
import { MaintenancesRoutingModule } from './maintenances-routing.module';
import { MaintenanceAddPageComponent } from './pages/maintenance-add-page/maintenance-add-page.component';
import { MaintenanceEditPageComponent } from './pages/maintenance-edit-page/maintenance-edit-page.component';
import { MaintenanceListPageComponent } from './pages/maintenance-list-page/maintenance-list-page.component';
import { MaintenanceItemComponent } from './components/maintenance-item/maintenance-item.component';

@NgModule({
	declarations: [
		MaintenanceListPageComponent,
		MaintenanceAddPageComponent,
		MaintenanceEditPageComponent,
		MaintenanceFormComponent,
		MaintenanceItemComponent,
	],
	imports: [CommonModule, MaintenancesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class MaintenancesModule {}
