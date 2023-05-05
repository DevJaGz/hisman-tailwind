import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-empty-state',
	templateUrl: './empty-state.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {}
