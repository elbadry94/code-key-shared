import { Component } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'lib-photo-slider',
  imports: [NgClass, NgForOf],
  templateUrl: './photo-slider.component.html',
  styleUrl: './photo-slider.component.css'
})
export class PhotoSliderComponent {
 photos = [
    { src: '/assets/img/student1.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student2.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student3.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student4.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student1.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student2.jpg', alt: 'Students of Luxor Faculty ', center: false },
   { src: '/assets/img/student3.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student1.jpg', alt: 'Students of Luxor Faculty ', center: false },
    { src: '/assets/img/student4.jpg', alt: 'Students of Luxor Faculty ', center: false }

  ];

  slides = [
    this.photos.slice(0, 7),
    this.photos.slice(0, 7)
  ];
}
