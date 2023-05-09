import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-nav-skeleton',
	templateUrl: './nav-skeleton.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSkeletonComponent {}
