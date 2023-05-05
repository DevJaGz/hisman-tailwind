import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppThemeService } from '@core/services/app-theme.service';

@Component({
	selector: 'app-theme-switcher',
	templateUrl: './theme-switcher.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
	@Input() widthClass = 'w-9';
	@Input() heightClass = 'h-9';
	isDarkTheme$ = this.appThemeService.isDarkTheme$;

	constructor(private appThemeService: AppThemeService) {}

	toggleTheme(): void {
		this.appThemeService.toogle();
	}
}
