import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
	transform(value: string, maxChars = 10): string {
		return value.length > maxChars ? value.slice(0, maxChars) + '...' : value;
	}
}
