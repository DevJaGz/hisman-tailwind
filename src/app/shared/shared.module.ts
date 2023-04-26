import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from '@shared/components/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [CommonModule, FormsModule],
  exports: [ThemeSwitcherComponent],
})
export class SharedModule {}
