import { Injectable } from '@angular/core';
import { THEME, THEME_KEY } from '@core/constants/theme.constants';
import { LocalStorageService } from '@core/services/local-storage.service';
import { WindowService } from '@core/services/window.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  constructor(
    private localStorageService: LocalStorageService,
    private windowService: WindowService
  ) {}

  private readonly defaultTheme = THEME.DARK;

  private _currentTheme$ = new BehaviorSubject(this.defaultTheme);

  get currentTheme$(): Observable<THEME> {
    return this._currentTheme$.asObservable();
  }

  get isDarkTheme$(): Observable<boolean> {
    return this.currentTheme$.pipe(
      map(currentTheme => currentTheme === THEME.DARK)
    );
  }

  /**
   * Set theme based on the prefer user color schema. Default is Dark
   */
  setAuto() {
    const currentTheme = this.localStorageService.getItem(THEME_KEY);
    const isCurrentThemDark = currentTheme === THEME.DARK;
    const isThemeNotSavedYet = !this.localStorageService.existKey(THEME_KEY);
    const isDarkPrefered = this.windowService.isPreferedThemeDark;
    if (isCurrentThemDark || (isThemeNotSavedYet && isDarkPrefered)) {
      this.setDark();
    } else {
      this.setLight();
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

  toogle() {
    const { _currentTheme$ } = this;
    const currentTheme = _currentTheme$.value;
    if (currentTheme === THEME.DARK) {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  private saveCurrentTheme(value: THEME) {
    this.updateCurrentTheme(value);
    this.localStorageService.setItem(THEME_KEY, value);
  }

  private updateCurrentTheme(value: THEME) {
    this._currentTheme$.next(value);
  }
}
