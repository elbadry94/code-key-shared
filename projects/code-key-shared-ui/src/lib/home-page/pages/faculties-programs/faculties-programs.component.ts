import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'lib-faculties-programs',
  imports: [NgForOf],
  templateUrl: './faculties-programs.component.html',
  styleUrl: './faculties-programs.component.css'
})
export class FacultiesProgramsComponent {
faculties = [
  {
    name: 'Faculty of Tourism and Hotels',
    description: 'Specialized programs in tourism, hotel management, and tour guiding.',
    img: '/assets/fac.png'
  },
  {
    name: 'Faculty of Fine Arts',
    description: 'Programs in applied arts, design, sculpture, and painting.',
    img: '/assets/fac.png'
  },
  {
    name: 'Faculty of Al-Alsun (Languages)',
    description: 'Study of languages, translation, and intercultural communication.',
    img: '/assets/computer.png'
  },
  {
    name: 'Faculty of Computers and Information',
    description: 'Programs in information technology, artificial intelligence, and data science.',
    img: '/assets/computer.png'
  },
  {
    name: 'Faculty of Medicine',
    description: 'Preparing distinguished doctors in various medical specialties.',
    img: '/assets/computer.png'
  },
  {
    name: 'Faculty of Archaeology',
    description: 'Study of Egyptian heritage and ancient monuments and their restoration.',
    img: '/assets/computer.png'
  }
];

}
