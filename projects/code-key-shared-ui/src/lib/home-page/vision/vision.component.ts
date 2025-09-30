import { Component } from '@angular/core';
import { NgStyle, NgClass, NgFor } from "@angular/common";

@Component({
  selector: 'lib-vision',
  imports: [NgStyle, NgClass, NgFor],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {
visionCards = [
  {
    text: 'Contributing to the sustainable development of the local and regional community by developing solutions to societal problems and strengthening partnerships with the private sector.',
    color: '#e5b77d',
    img: '/assets/Vector.png',
    colClass: 'col-md-6'   // 🟢 Half width
  },
  {
    text: 'Achieving excellence in academic programs and curricula through curriculum development and updating academic programs.',
    color: '#5b68b0',
    img: '/assets/BookOpen.png',
    // icon: 'bi bi-book',
    colClass: 'col-md-6'   // 🟢 Half width
  },
  {
    text: 'Enhancing the level of scientific research and innovation at the university by supporting distinguished research projects and promoting international research collaboration.',
    color: '#5db6b0',
    img: '/assets/Vector (1).png',
    colClass: 'col-md-4'   // 🟢 One-third width
  },
  {
    text: 'Preparing academically and professionally qualified graduates capable of competing in the local, regional, and global labor markets, while developing both practical and theoretical skills.',
    color: '#d87d83',
    img: '/assets/Student.png',
    colClass: 'col-md-8'   // 🟢 Two-thirds width
  }
];


}
