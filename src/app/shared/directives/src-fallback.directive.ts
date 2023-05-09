import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NO_PHOTO_URL } from '@core/constants/app-state.constant';

@Directive({
	selector: 'img[appSrcFallback]',
})
export class SrcFallbackDirective implements OnInit {
	@Input() appSrcFallback: string;

	constructor(private elementRef: ElementRef) {}

	ngOnInit(): void {
		const img = this.elementRef.nativeElement as HTMLImageElement;

		// Add an error listener to the image element
		img.addEventListener('error', () => {
			// If the original image fails to load, set the fallback image as the new source
			img.src = this.appSrcFallback || NO_PHOTO_URL;
		});
	}
}
