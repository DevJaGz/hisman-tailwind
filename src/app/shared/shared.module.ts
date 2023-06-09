import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from '@shared/components/theme-switcher/theme-switcher.component';
import { EllipsisPipe } from '@shared/pipes/ellipsis.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { FooterFixedBarComponent } from './components/footer-fixed-bar/footer-fixed-bar.component';
import { FormFooterButtonsComponent } from './components/form-footer-buttons/form-footer-buttons.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { SrcFallbackDirective } from './directives/src-fallback.directive';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';
import { VehicleLabelPipe } from './pipes/vehicle-label.pipe';

@NgModule({
	declarations: [
		ThemeSwitcherComponent,
		AlertComponent,
		EmptyStateComponent,
		UppercaseInputDirective,
		SrcFallbackDirective,
		GenericTableComponent,
		VehicleLabelPipe,
		FormFooterButtonsComponent,
		FooterFixedBarComponent,
		FormLayoutComponent,
		EllipsisPipe,
	],
	imports: [CommonModule, FormsModule, NgOptimizedImage],
	exports: [
		ThemeSwitcherComponent,
		AlertComponent,
		EmptyStateComponent,
		NgOptimizedImage,
		UppercaseInputDirective,
		SrcFallbackDirective,
		GenericTableComponent,
		VehicleLabelPipe,
		FormFooterButtonsComponent,
		FooterFixedBarComponent,
		FormLayoutComponent,
		EllipsisPipe,
	],
})
export class SharedModule {}
