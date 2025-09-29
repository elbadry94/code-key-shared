import { Component } from '@angular/core';
import { NgFor, NgClass } from "@angular/common";

@Component({
  selector: 'lib-logo-slider',
  imports: [NgFor, NgClass],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.css'
})
export class LogoSliderComponent {
 logos = [
    { src: '/assets/College.png', alt: 'Luxor Faculty of Medicine', center: false },
    { src: '/assets/College.png', alt: 'Luxor Faculty of Medicine', center: false },
    { src: '/assets/hourse.png', alt: 'Pharaoh', center: true },  // الصورة اللي في النص
    { src: '/assets/College.png', alt: 'Luxor Faculty of Medicine', center: false },
    { src: '/assets/College.png', alt: 'Luxor Faculty of Medicine', center: false },
    { src: '/assets/College.png', alt: 'Luxor Faculty of Medicine', center: false },
    { src: '/assets/hourse.png', alt: 'Pharaoh', center: true },  // الصورة اللي في النص
    { src: '/assets/College.png', alt: 'Luxor Faculty of Medicine', center: false }
  ];

  slides = [
    this.logos.slice(0, 5),
    this.logos.slice(0, 3)
  ];
}
