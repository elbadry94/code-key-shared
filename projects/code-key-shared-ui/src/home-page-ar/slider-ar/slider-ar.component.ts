import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'lib-slider-ar',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './slider-ar.component.html',
  styleUrl: './slider-ar.component.css',
})
export class SliderComponentAr {
@Input() slides: any[] = [
  {
    image: '/assets/slider2.png',
    title: `من تراث حضارتنا نصوغ عقولاً تبني المجد`,
    title2:
      'تسعى جامعة الأقصر إلى تقديم تعليم عالي الجودة، وتعزيز البحث العلمي، وخدمة المجتمعين المحلي والدولي، مع الالتزام بالقيم الأخلاقية والحفاظ على التراث الثقافي والحضاري. نحن نؤمن بأهمية تنمية قدرات الطلاب وإعدادهم ليصبحوا قادة المستقبل في مختلف المجالات.',
  },

  {
    image: '/assets/slider3.jpg',
    title: `من تراث حضارتنا نصوغ عقولاً تبني المجد`,
    title2:
      'تسعى جامعة الأقصر إلى تقديم تعليم عالي الجودة، وتعزيز البحث العلمي، وخدمة المجتمعين المحلي والدولي، مع الالتزام بالقيم الأخلاقية والحفاظ على التراث الثقافي والحضاري. نحن نؤمن بأهمية تنمية قدرات الطلاب وإعدادهم ليصبحوا قادة المستقبل في مختلف المجالات.',
  },

  {
    image: '/assets/slider4.jpg',
    title: `من تراث حضارتنا نصوغ عقولاً تبني المجد`,
    title2:
      'تسعى جامعة الأقصر إلى تقديم تعليم عالي الجودة، وتعزيز البحث العلمي، وخدمة المجتمعين المحلي والدولي، مع الالتزام بالقيم الأخلاقية والحفاظ على التراث الثقافي والحضاري. نحن نؤمن بأهمية تنمية قدرات الطلاب وإعدادهم ليصبحوا قادة المستقبل في مختلف المجالات.',
  },
];


}
