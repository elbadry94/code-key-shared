// services.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
  readMoreUrl?: string;
}

@Component({
  selector: 'ck-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None // هذا مهم جداً!
})
export class ServicesComponent {
  @Input() services!: ServiceItem[];
  @Input() sectionTitle!: string;
  @Input() showTitle!: boolean;
  @Input() showAllServicesButton!: boolean;
  @Input() allServicesUrl!: string;
  @Input() allServicesText!: string;

  @Output() serviceClick = new EventEmitter<ServiceItem>();
  @Output() readMoreClick = new EventEmitter<ServiceItem>();
  @Output() allServicesClick = new EventEmitter<void>();

  constructor() { }

  onServiceClick(service: ServiceItem): void {
    this.serviceClick.emit(service);
  }

  onReadMoreClick(service: ServiceItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.readMoreClick.emit(service);
  }

  onAllServicesClick(): void {
    this.allServicesClick.emit();
  }

  trackByFn(index: number, item: ServiceItem): string {
    return item.id || item.title;
  }
}