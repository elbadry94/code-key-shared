import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'lib-slider',
  imports: [CommonModule, CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
@Input() slides: any[] = [
  {
    image: '/assets/slider2.png',
    title: `From the heritage of our civilization, we shape minds that build glory`,
    title2:
      'Luxor University seeks to provide high-quality education, promote scientific research, and serve both the local and international community, while adhering to ethical values and preserving cultural and civilizational heritage. We believe in the importance of developing students’ abilities and preparing them to become future leaders in various fields.',
  },

  {
    image: '/assets/slider3.jpg',
    title: `From the heritage of our civilization, we shape minds that build glory`,
    title2:
      'Luxor University seeks to provide high-quality education, promote scientific research, and serve both the local and international community, while adhering to ethical values and preserving cultural and civilizational heritage. We believe in the importance of developing students’ abilities and preparing them to become future leaders in various fields.',
  },

  {
    image: '/assets/slider4.jpg',
    title: `From the heritage of our civilization, we shape minds that build glory`,
    title2:
      'Luxor University seeks to provide high-quality education, promote scientific research, and serve both the local and international community, while adhering to ethical values and preserving cultural and civilizational heritage. We believe in the importance of developing students’ abilities and preparing them to become future leaders in various fields.',
  },
];

}
