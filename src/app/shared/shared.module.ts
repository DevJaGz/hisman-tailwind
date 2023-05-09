import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from '@shared/components/theme-switcher/theme-switcher.component';
import { AlertComponent } from './components/alert/alert.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { SrcFallbackDirective } from './directives/src-fallback.directive';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';

@NgModule({
	declarations: [
		ThemeSwitcherComponent,
		AlertComponent,
		EmptyStateComponent,
		UppercaseInputDirective,
		SrcFallbackDirective,
	],
	imports: [CommonModule, FormsModule, NgOptimizedImage],
	exports: [
		ThemeSwitcherComponent,
		AlertComponent,
		EmptyStateComponent,
		NgOptimizedImage,
		UppercaseInputDirective,
		SrcFallbackDirective,
	],
})
export class SharedModule {}
