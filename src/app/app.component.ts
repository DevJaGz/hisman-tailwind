import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppThemeService } from '@core/services/app-theme.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private appThemeService: AppThemeService) {
    this.appThemeService.setAuto();
  }
}
