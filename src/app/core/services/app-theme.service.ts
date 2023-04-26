import { Injectable } from '@angular/core';
import { THEME, THEME_KEY } from '@core/constants/theme.constants';
import { LocalStorageService } from '@core/services/local-storage.service';
import { WindowService } from '@core/services/window.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  /**
   * Notify the current theme
   */
  private currentThemeNotifier$ = new BehaviorSubject(THEME.LIGHT);

  /**
   * Current theme in the app
   */
  get currentTheme$(): Observable<THEME> {
    return this.currentThemeNotifier$.asObservable();
  }

  /**
   * True if the current theme is dark
   */
  get isDarkTheme$(): Observable<boolean> {
    return this.currentTheme$.pipe(
      map(currentTheme => currentTheme === THEME.DARK)
    );
  }

  constructor(
    private localStorageService: LocalStorageService,
    private windowService: WindowService
  ) {}

  /**
   * Set theme based on the user preferences or the last stored schema.
   * If there is no user preference or the theme has not been saved yet, then theme will be Light by default.
   */
  setAuto() {
    const currentTheme = this.localStorageService.getItem(THEME_KEY);
    const isCurrentThemDark = currentTheme === THEME.DARK;
    const isThemeAlreadySaved = this.localStorageService.existKey(THEME_KEY);
    const isDarkPrefered = this.windowService.isDarkPreferredTheme;

    if (isCurrentThemDark || (!isThemeAlreadySaved && isDarkPrefered)) {
      this.setDark();
    } else {
      this.setLight();
    }
  }

  /**
   * Set current theme to light
   */
  setLight() {
    const value = THEME.LIGHT;
    document.documentElement.setAttribute('data-theme', value);
    this.themeChangeHandler(value);
  }

  /**
   * Set current theme to dark
   */
  setDark() {
    const value = THEME.DARK;
    document.documentElement.setAttribute('data-theme', value);
    this.themeChangeHandler(value);
  }

  /**
   * Toggle current theme
   */
  toogle() {
    const { currentThemeNotifier$: _currentTheme$ } = this;
    const currentTheme = _currentTheme$.value;
    if (currentTheme === THEME.DARK) {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  /**
   * Handle the logic when the current theme has been changed
   * @param value - New theme value
   */
  private themeChangeHandler(value: THEME) {
    this.updateCurrentTheme(value);
    this.localStorageService.setItem(THEME_KEY, value);
  }

  /**
   * Update the current theme
   * @param value - New theme value
   */
  private updateCurrentTheme(value: THEME) {
    this.currentThemeNotifier$.next(value);
  }
}
