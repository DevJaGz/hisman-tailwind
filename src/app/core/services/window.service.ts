import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private readonly _window = window;

  get isPreferedThemeDark(): boolean {
    return this._window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
