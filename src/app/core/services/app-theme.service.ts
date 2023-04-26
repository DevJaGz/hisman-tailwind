import { Injectable } from '@angular/core';
import { THEME, THEME_KEY } from '@core/constants/theme.constants';
import { LocalStorageService } from '@core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  constructor(private localStorageService: LocalStorageService) {}

  /**
   * Set theme based on the prefer user color schema. Default is Dark
   */
  setAuto() {
    const currentTheme = this.localStorageService.getItem(THEME_KEY);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setDark();
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.setLight();
    } else if (currentTheme === THEME.LIGHT) {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  setLight() {
    const value = THEME.LIGHT;
    document.documentElement.setAttribute('data-theme', value);
    this.saveCurrentTheme(value);
  }

  setDark() {
    const value = THEME.DARK;
    document.documentElement.setAttribute('data-theme', value);
    this.saveCurrentTheme(value);
  }

  private saveCurrentTheme(value: THEME) {
    this.localStorageService.setItem(THEME_KEY, value);
  }
}
