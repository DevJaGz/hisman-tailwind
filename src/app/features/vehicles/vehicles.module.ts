import { NgModule } from '@angular/core';

import { CommonModule, DecimalPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { VehicleCardItemComponent } from './components/vehicle-card-item/vehicle-card-item.component';
import { VehicleCardListComponent } from './components/vehicle-card-list/vehicle-card-list.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { AddVehiclePageComponent } from './pages/add-vehicle-page/add-vehicle-page.component';
import { EditVehiclePageComponent } from './pages/edit-vehicle-page/edit-vehicle-page.component';
import { VehicleListPageComponent } from './pages/vehicle-list-page/vehicle-list-page.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
	declarations: [
		AddVehiclePageComponent,
		VehicleFormComponent,
		EditVehiclePageComponent,
		VehicleCardListComponent,
		VehicleCardItemComponent,
		VehicleListPageComponent,
	],
	imports: [CommonModule, VehiclesRoutingModule, SharedModule, ReactiveFormsModule],
	providers: [DecimalPipe],
})
export class VehiclesModule {}
