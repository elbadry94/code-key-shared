import { Component } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'lib-statistics-section',
  imports: [NgClass, NgForOf],
  templateUrl: './statistics-section.component.html',
  styleUrl: './statistics-section.component.css'
})
export class StatisticsSectionComponent {
stats = [
  { number: 1201, label: 'International Students', icon: 'bi bi-globe' },
  { number: 2090, label: 'Postgraduate Students', icon: 'bi bi-mortarboard' },
  { number: 32090, label: 'Undergraduate Students', icon: 'bi bi-mortarboard-fill' },
  { number: 1090, label: 'Faculty Members', icon: 'bi bi-person-badge' },
  { number: 11, label: 'Staff', icon: 'bi bi-building' },
];
}
