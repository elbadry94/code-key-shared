import { Input } from '@angular/core';
import { Component } from '@angular/core';
// import { NgForOf } from "@angular/common";
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'lib-service-section-ar',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './service-section-ar.component.html',
  styleUrl: './service-section-ar.component.css'
})
export class ServiceSectionComponentAr {
    @Input() presidentPath: string = '/assets/president.jpg';

@Input() services: any[] = [
  { title: 'خدمات الطلاب', icon: 'bi bi-person' },
  { title: 'خدمات الدراسات العليا', icon: 'bi bi-mortarboard' },
  { title: 'خدمات أعضاء هيئة التدريس', icon: 'bi bi-people' },
  { title: 'الخدمات الورقية', icon: 'bi bi-file-earmark-text' },
];

}
