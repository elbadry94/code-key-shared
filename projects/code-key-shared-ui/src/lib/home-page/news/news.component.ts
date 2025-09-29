import { Component } from '@angular/core';
import { SlicePipe, NgFor } from "@angular/common";

@Component({
  selector: 'lib-news',
  imports: [SlicePipe, NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
newsList = [
  {
    title: 'Towards Effective Inclusion in Our Schools – Luxor University Organizes an Awareness Meeting to Empower People of Determination',
    description:
      'Prof. Dr. Sabrine Abdel Gelil, President of Luxor University, chaired the regular meeting of the University Facilities Committee today, Tuesday, as part of her keenness to continuously follow up on the implementation status of ongoing university projects.',
    date: '12-9-2025'
  },
  {
    title: 'Luxor University Facilities Committee Discusses the Implementation Status of University Projects',
    description:
      'Prof. Dr. Sabrine Abdel Gelil, President of Luxor University, chaired the regular meeting of the University Facilities Committee today, Tuesday, as part of her continuous follow-up on university projects.',
    date: '12-9-2025'
  },
  {
    title: 'University Council Meeting Chaired by the President',
    description:
      'The University Council, chaired by the President of Luxor University, discussed the latest developments related to new research and educational projects at the university.',
    date: '11-9-2025'
  },
  {
    title: 'New International Cooperation Between Luxor University and a Number of Global Universities',
    description:
      'Luxor University signed a new cooperation protocol with several international universities to enhance scientific and research collaboration.',
    date: '10-9-2025'
  }
];

}
