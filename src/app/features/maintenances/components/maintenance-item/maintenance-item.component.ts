import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	Input,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { DEFAULT_DATE_FORMAT } from '@core/constants/app-state.constant';
import { IMaintenance } from '@core/interfaces/maintenance.interface';

@Component({
	selector: 'app-maintenance-item',
	templateUrl: './maintenance-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceItemComponent implements AfterViewInit {
	@ViewChild('textAreaDescription', { static: true }) textAreaDescription: ElementRef<HTMLTextAreaElement>;
	@Input()
	maintenance: IMaintenance;

	defaultFormat = DEFAULT_DATE_FORMAT;

	get date(): string {
		return this.maintenance?.date as string;
	}

	get name(): string {
		return this.maintenance?.name;
	}

	get description(): string {
		return decodeURIComponent(this.maintenance?.description || 'Sin descripción.');
	}

	get location(): string {
		return this.maintenance?.location || 'No especificado.';
	}

	get price(): number {
		return this.maintenance?.price;
	}

	get technicianName(): string {
		return this.maintenance?.technicianName || 'No especificado.';
	}

	constructor(private renderer: Renderer2) {}

	private setHeightTextArea(): void {
		const textAreaDescriptionElement = this.textAreaDescription.nativeElement;
		if (this.location === 'Manizales') {
			console.log('scrollHeight', textAreaDescriptionElement.scrollHeight);
			console.log('offsetHeight', textAreaDescriptionElement.offsetHeight);
			console.log('clientHeight', textAreaDescriptionElement.clientHeight);
		}
		this.renderer.setStyle(textAreaDescriptionElement, 'height', `auto`); // Recalculate the scrollHeight (Fix the bug passing from small to large screen)
		this.renderer.setStyle(textAreaDescriptionElement, 'height', `${textAreaDescriptionElement.scrollHeight}px`); // Set the height of the textarea to match its scrollHeight
	}

	ngAfterViewInit(): void {
		this.setHeightTextArea();
	}

	@HostListener('window:resize')
	onWindowResize(): void {
		this.setHeightTextArea();
	}
}
