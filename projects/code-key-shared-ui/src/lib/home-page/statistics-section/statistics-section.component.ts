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
    { number: 1201, label: 'طالب وافد', icon: 'bi bi-globe' },
    { number: 2090, label: 'طالب دراسات عليا', icon: 'bi bi-mortarboard' },
    { number: 32090, label: 'طالب جامعي', icon: 'bi bi-mortarboard-fill' },
    { number: 1090, label: 'عضو هيئة تدريس', icon: 'bi bi-person-badge' },
    { number: 11, label: 'موظف', icon: 'bi bi-building' },
  ];
}
