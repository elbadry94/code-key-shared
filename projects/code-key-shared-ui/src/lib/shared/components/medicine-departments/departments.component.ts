import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface DepartmentItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}

@Component({
  selector: 'ck-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  encapsulation: ViewEncapsulation.None // This ensures CSS variables and styles are applied globally
})
export class DepartmentsComponent {
  @Input() departments!: DepartmentItem[];
  @Input() sectionTitle!: string;
  @Input() showTitle!: boolean;

  constructor() { }

  onDepartmentClick(department: DepartmentItem): void {
    // Emit event or handle click as needed
    console.log('Department clicked:', department);
  }

  trackByFn(index: number, item: DepartmentItem): string {
    return item.id || item.title;
  }
}