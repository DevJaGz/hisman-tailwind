import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from '@shared/components/theme-switcher/theme-switcher.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
	declarations: [ThemeSwitcherComponent, AlertComponent],
	imports: [CommonModule, FormsModule],
	exports: [ThemeSwitcherComponent, AlertComponent],
})
export class SharedModule {}
