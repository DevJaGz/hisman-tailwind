import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface IGenericTableColumn {
	field: string;
	label: string;
}

@Component({
	selector: 'app-generic-table',
	templateUrl: './generic-table.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent {
	@Input()
	columns: IGenericTableColumn[] = [];

	@Input()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	rows: { [key: string]: any }[] = [];
}
