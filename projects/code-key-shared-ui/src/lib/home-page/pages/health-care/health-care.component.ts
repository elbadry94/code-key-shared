import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'lib-health-care',
  imports: [NgForOf],
  templateUrl: './health-care.component.html',
  styleUrl: './health-care.component.css'
})
export class HealthCareComponent {
healthServices = [
  {
    title: 'Basic Medical Services',
    description: 'Providing regular medical check-ups for students and faculty members.',
    icon: 'bi bi-heart-pulse'
  },
  {
    title: 'First Aid',
    description: 'Emergency and first aid services available on campus throughout the day.',
    icon: 'bi bi-hospital'
  },
  {
    title: 'Health Awareness',
    description: 'Organizing seminars and awareness campaigns to promote public health.',
    icon: 'bi bi-journal-medical'
  },
  {
    title: 'Psychological Care',
    description: 'Providing psychological support and counseling to help students face challenges.',
    icon: 'bi bi-emoji-smile'
  },
  {
    title: 'Immunizations & Vaccines',
    description: 'Providing necessary vaccinations for students according to national programs.',
    icon: 'bi bi-shield-plus'
  },
  {
    title: 'Advanced Care',
    description: 'Transferring critical cases to specialized university hospitals.',
    icon: 'bi bi-clipboard2-pulse'
  }
];


  clinics = [
    '/assets/clinic.jpg',
    '/assets/clinic2.jpg'
  ];
}
