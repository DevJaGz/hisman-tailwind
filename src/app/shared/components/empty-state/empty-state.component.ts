import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-empty-state',
	templateUrl: './empty-state.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
	@Input() title: string;
	@Input() message: string;
	@Input() image: string;
}
