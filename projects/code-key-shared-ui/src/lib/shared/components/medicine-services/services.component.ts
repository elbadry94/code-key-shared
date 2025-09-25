// services.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  imports: [CommonModule, RouterModule],
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
  @Input() Read_more_btn!: string| 'Read More';

  /**
   * Generic router link function to be passed from parent
   * Example: (service) => ['/services', service.id]
   */
  @Input() readMoreLinkFn?: (service: ServiceItem) => any;



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