import { Component } from '@angular/core';
import { NgFor, NgStyle } from "@angular/common";

@Component({
  selector: 'lib-sectors-section-ar',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './sectors-section-ar.component.html',
  styleUrl: './sectors-section-ar.component.css'
})
export class SectorsSectionComponentAr {
sectors = [
  { title: 'قطاع أمين عام الجامعة', color: '#4B4BC9' },
  { title: 'قطاع خدمة المجتمع وتنمية البيئة', color: '#1C8E83' },
  { title: 'قطاع الدراسات العليا والبحوث', color: '#C7354E' },
  { title: 'قطاع شؤون التعليم والطلاب', color: '#E58B1A' }
];
}
