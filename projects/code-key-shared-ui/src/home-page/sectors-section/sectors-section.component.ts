import { Component } from '@angular/core';
import { NgFor, NgStyle } from "@angular/common";

@Component({
  selector: 'lib-sectors-section',
  imports: [NgFor, NgStyle],
  templateUrl: './sectors-section.component.html',
  styleUrl: './sectors-section.component.css'
})
export class SectorsSectionComponent {
sectors = [
    { title: 'قطاع أمين عام الجامعة', color: '#4B4BC9' },
    { title: 'قطاع خدمة المجتمع وتنمية البيئة', color: '#1C8E83' },
    { title: 'قطاع الدراسات العليا والبحوث', color: '#C7354E' },
    { title: 'قطاع شؤون التعليم والطلاب', color: '#E58B1A' }
  ];
}
