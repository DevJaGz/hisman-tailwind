import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppThemeService } from '@core/services/app-theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  isDarkTheme$ = this.appThemeService.isDarkTheme$;

  constructor(private appThemeService: AppThemeService) {}

  toggleTheme(): void {
    this.appThemeService.toogle();
  }
}
