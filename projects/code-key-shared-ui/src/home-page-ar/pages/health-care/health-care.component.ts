import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'lib-health-care',
  imports: [NgForOf],
  templateUrl: './health-care.component.html',
  styleUrl: './health-care.component.css'
})
export class HealthCareComponent {
 healthServices = [
    {
      title: 'الخدمات الطبية الأساسية',
      description: 'توفير الكشف الطبي الدوري للطلاب وأعضاء هيئة التدريس.',
      icon: 'bi bi-heart-pulse'
    },
    {
      title: 'الإسعافات الأولية',
      description: 'خدمة الطوارئ والإسعافات الأولية داخل الجامعة على مدار اليوم.',
      icon: 'bi bi-hospital'
    },
    {
      title: 'التوعية الصحية',
      description: 'تنظيم ندوات وحملات توعية للحفاظ على الصحة العامة.',
      icon: 'bi bi-journal-medical'
    },
    {
      title: 'الرعاية النفسية',
      description: 'دعم نفسي واستشارات لمساعدة الطلاب على مواجهة التحديات.',
      icon: 'bi bi-emoji-smile'
    },
    {
      title: 'التحصينات واللقاحات',
      description: 'توفير التطعيمات واللقاحات اللازمة للطلاب حسب البرامج الوطنية.',
      icon: 'bi bi-shield-plus'
    },
    {
      title: 'الرعاية المتقدمة',
      description: 'تحويل الحالات الحرجة إلى المستشفيات الجامعية المتخصصة.',
      icon: 'bi bi-clipboard2-pulse'
    }
  ];

  clinics = [
    '/assets/clinic.jpg',
    '/assets/clinic2.jpg'
  ];
}
