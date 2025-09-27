import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'lib-slider',
  imports: [CommonModule, CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() slides: any[] = [
    { image: 'assets/slider2.png', title: `من تراث حضارتنا, نصوغ عقولاً تبني المجد`,
      title2:' نسعي نحن جامعة الاقصر الي تحقيق و تقديم تعليم عالي الجودة' },
    { image: 'assets/slider2.png', title: 'جامعة الأزهر - عراقة وأصالة' }
  ];
}
