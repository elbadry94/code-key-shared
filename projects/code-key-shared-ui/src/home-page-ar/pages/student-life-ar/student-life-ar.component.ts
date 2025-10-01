import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'lib-student-life-ar',
  imports: [NgForOf],
  templateUrl: './student-life-ar.component.html',
  styleUrl: './student-life-ar.component.css'
})
export class StudentLifeComponentAr {
  studentLife = [
    {
      title: 'الأنشطة الطلابية',
      description: 'تنظيم فعاليات ثقافية، رياضية، وفنية تساعد الطلاب على تطوير مهاراتهم وصقل مواهبهم.',
      icon: 'bi bi-people'
    },
    {
      title: 'الخدمات الصحية',
      description: 'توفير الرعاية الطبية والدعم الصحي للطلاب على مدار العام.',
      icon: 'bi bi-heart-pulse'
    },
    {
      title: 'الأنشطة الرياضية',
      description: 'نوادي رياضية وملاعب مجهزة لدعم اللياقة البدنية وتشجيع الروح الرياضية.',
      icon: 'bi bi-trophy'
    },
    {
      title: 'الأنشطة الثقافية',
      description: 'برامج وفعاليات ثقافية لتعزيز الهوية والانفتاح على الثقافات الأخرى.',
      icon: 'bi bi-book'
    },
    {
      title: 'الدعم الأكاديمي',
      description: 'خدمات إرشاد أكاديمي لمساعدة الطلاب في مسيرتهم التعليمية.',
      icon: 'bi bi-mortarboard'
    },
    {
      title: 'المجتمع الطلابي',
      description: 'بناء مجتمع طلابي متكامل يدعم التعاون والتواصل بين الطلاب.',
      icon: 'bi bi-chat-dots'
    }
  ];

  gallery = [
    '/assets/img/student1.jpg',
    '/assets/img/student2.jpg',
    '/assets/img/student3.jpg',
    '/assets/img/student4.jpg',
    '/assets/img/student1.jpg',
    '/assets/img/student2.jpg'
  ];
}
