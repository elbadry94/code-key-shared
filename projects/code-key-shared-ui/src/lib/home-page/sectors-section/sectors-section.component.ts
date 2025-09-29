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
  { title: 'University Secretary General Sector', color: '#4B4BC9' },
  { title: 'Community Service and Environmental Development Sector', color: '#1C8E83' },
  { title: 'Postgraduate Studies and Research Sector', color: '#C7354E' },
  { title: 'Education and Student Affairs Sector', color: '#E58B1A' }
];
}
