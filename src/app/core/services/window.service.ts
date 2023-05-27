import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class WindowService {
	/**
	 * Window instance
	 */
	private readonly _window = this.document.defaultView.window;

	/**
	 * True if the user theme is dark
	 */
	get isDarkPreferredTheme(): boolean {
		return this._window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	constructor(@Inject(DOCUMENT) private document: Document) {}
}
