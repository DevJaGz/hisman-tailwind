import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { VehicleFooterButtonsComponent } from './components/vehicle-footer-buttons/vehicle-footer-buttons.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { AddVehiclePageComponent } from './pages/add-vehicle-page/add-vehicle-page.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
	declarations: [AddVehiclePageComponent, VehicleFormComponent, VehicleFooterButtonsComponent],
	imports: [CommonModule, VehiclesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class VehiclesModule {}
