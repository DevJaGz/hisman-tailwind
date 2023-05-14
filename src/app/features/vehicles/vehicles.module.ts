import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { VehicleFooterButtonsComponent } from './components/vehicle-form-footer-buttons/vehicle-form-footer-buttons.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { AddVehiclePageComponent } from './pages/add-vehicle-page/add-vehicle-page.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { MaintenanceFormComponent } from './components/maintenance-form/maintenance-form.component';

@NgModule({
	declarations: [
		AddVehiclePageComponent,
		VehicleFormComponent,
		VehicleFooterButtonsComponent,
		MaintenanceFormComponent,
	],
	imports: [CommonModule, VehiclesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class VehiclesModule {}
