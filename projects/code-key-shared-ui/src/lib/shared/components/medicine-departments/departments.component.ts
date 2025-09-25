import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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

  /**
   * Generic router link function to be passed from parent
   * Example: (department) => ['/departments', department.id]
   */
  @Input() departmentLinkFn?: (department: DepartmentItem) => any;

  constructor(private router: Router) { }

  onDepartmentClick(department: DepartmentItem): void {
    if (this.departmentLinkFn) {
      const link = this.departmentLinkFn(department);
      this.router.navigate(Array.isArray(link) ? link : [link]);
    }
  }

  trackByFn(index: number, item: DepartmentItem): string {
    return item.id || item.title;
  }
}