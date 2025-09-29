import { Input } from '@angular/core';
import { Component } from '@angular/core';
// import { NgForOf } from "@angular/common";
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'lib-service-section',
  imports: [CommonModule, NgForOf],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {
    @Input() presidentPath: string = 'assets/president.jpg';

 @Input() services: any[] = [
    { title: 'خدمة الطلاب', icon: 'bi bi-person' },
    { title: 'خدمة الدراسات العليا', icon: 'bi bi-mortarboard' },
    { title: 'خدمة أعضاء هيئة التدريس', icon: 'bi bi-people' },
    { title: 'خدمة ورقية', icon: 'bi bi-file-earmark-text' },
  ];
}
