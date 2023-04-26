import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-core-page',
	templateUrl: './core-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorePageComponent {}
