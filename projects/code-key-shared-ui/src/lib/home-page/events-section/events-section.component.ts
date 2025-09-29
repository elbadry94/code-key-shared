import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

@Component({
  selector: 'lib-events-section',
  imports: [NgFor],
  templateUrl: './events-section.component.html',
  styleUrl: './events-section.component.css'
})
export class EventsSectionComponent {

events = [
  {
    title: 'Scientific Missions in the Field of Artificial Intelligence',
    description:
      'Prof. Dr. Margaret Abdel Gelil, President of Luxor University, chaired the regular meeting of the University Facilities Committee today, Tuesday, as part of her keenness on continuous follow-up...',
    date: '21-6-2025',
    time: '04:00 PM',
    location: 'Luxor, Egypt'
  },
  {
    title: 'Scientific Missions in the Field of Artificial Intelligence',
    description:
      'Prof. Dr. Margaret Abdel Gelil, President of Luxor University, chaired the regular meeting of the University Facilities Committee today, Tuesday, as part of her keenness on continuous follow-up...',
    date: '21-6-2025',
    time: '04:00 PM',
    location: 'Luxor, Egypt'
  },
  {
    title: 'Scientific Missions in the Field of Artificial Intelligence',
    description:
      'Prof. Dr. Margaret Abdel Gelil, President of Luxor University, chaired the regular meeting of the University Facilities Committee today, Tuesday, as part of her keenness on continuous follow-up...',
    date: '21-6-2025',
    time: '04:00 PM',
    location: 'Luxor, Egypt'
  },
  {
    title: 'Scientific Missions in the Field of Artificial Intelligence',
    description:
      'Prof. Dr. Margaret Abdel Gelil, President of Luxor University, chaired the regular meeting of the University Facilities Committee today, Tuesday, as part of her keenness on continuous follow-up...',
    date: '21-6-2025',
    time: '04:00 PM',
    location: 'Luxor, Egypt'
  }
];

}
