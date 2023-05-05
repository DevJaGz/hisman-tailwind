import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from '@shared/components/theme-switcher/theme-switcher.component';
import { AlertComponent } from './components/alert/alert.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
	declarations: [ThemeSwitcherComponent, AlertComponent, EmptyStateComponent],
	imports: [CommonModule, FormsModule, NgOptimizedImage],
	exports: [ThemeSwitcherComponent, AlertComponent, EmptyStateComponent, NgOptimizedImage],
})
export class SharedModule {}
