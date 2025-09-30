import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'lib-statistics-section',
  imports: [NgClass, NgForOf],
  templateUrl: './statistics-section.component.html',
  styleUrl: './statistics-section.component.css'
})
export class StatisticsSectionComponent implements OnInit {
stats = [
  { number: 1201, label: 'International Students', icon: 'bi bi-globe', currentNumber: 0 },
  { number: 2090, label: 'Postgraduate Students', icon: 'bi bi-mortarboard', currentNumber: 0 },
  { number: 32090, label: 'Undergraduate Students', icon: 'bi bi-mortarboard-fill', currentNumber: 0 },
  { number: 1090, label: 'Faculty Members', icon: 'bi bi-person-badge', currentNumber: 0 },
  { number: 11, label: 'Staff', icon: 'bi bi-building', currentNumber: 0 },
];

ngOnInit() {
  this.startCounting();
}

startCounting() {
  this.stats.forEach(stat => {
    const duration = 2000; // 2 seconds
    const steps = 100;
    const increment = stat.number / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        stat.currentNumber = stat.number;
        clearInterval(timer);
      } else {
        stat.currentNumber = Math.floor(current);
      }
    }, interval);
  });
}
}
