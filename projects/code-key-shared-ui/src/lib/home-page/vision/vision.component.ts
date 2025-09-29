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
      text: 'المساهمة في التنمية المستدامة للمجتمع المحلي والإقليمي من خلال تطوير حلول للمشاكل المجتمعية وتعزيز الشراكة مع القطاع الخاص.',
      color: '#e5b77d',
      img: '/assets/Vector.png',

      colClass: 'col-md-6'   // 🟢 نص العرض
    },
      {
      text: 'تحقيق التميز في البرامج الأكاديمية والمناهج الدراسية من تطوير المناهج الدراسية وتحديث البرامج الأكاديمية.',
      color: '#5b68b0',
      img: '/assets/BookOpen.png',

      // icon: 'bi bi-book',
      colClass: 'col-md-6'   // 🟢 نص العرض
    },
    {
      text: 'الارتقاء بمستوى البحث العلمي والابتكار في الجامعة من خلال دعم المشاريع البحثية المتميزة وتعزيز التعاون البحثي الدولي.',
      color: '#5db6b0',
      img: '/assets/Vector (1).png',
      colClass: 'col-md-4'   // 🟢 ثلث العرض
    },
    {
      text: 'إعداد خريجين مؤهلين علمياً ومهنياً قادرين على المنافسة في سوق العمل المحلي والإقليمي والعالمي، مع تطوير المهارات العملية والنظرية.',
      color: '#d87d83',
      img: '/assets/Student.png',
      colClass: 'col-md-8'   // 🟢 ثلثين العرض
    }
  ];

}
