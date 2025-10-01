import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'lib-faculties-programs-ar',
  imports: [NgForOf],
  templateUrl: './faculties-programs-ar.component.html',
  styleUrl: './faculties-programs-ar.component.css'
})
export class FacultiesProgramsComponentAr {
  faculties = [
    {
      name: 'كلية السياحة والفنادق',
      description: 'برامج متخصصة في السياحة وإدارة الفنادق والإرشاد السياحي.',
      img: '/assets/fac.png'
    },
    {
      name: 'كلية الفنون الجميلة',
      description: 'برامج في الفنون التطبيقية والتصميم والنحت والرسم.',
      img: '/assets/fac.png'
    },
    {name: 'كلية الألسن',
      description: 'دراسة اللغات والترجمة والتواصل بين الثقافات.',
      img: '/assets/computer.png'
    },
    {
      name: 'كلية الحاسبات والمعلومات',
      description: 'برامج تكنولوجيا المعلومات، الذكاء الاصطناعي وعلوم البيانات.',
      img: '/assets/computer.png'
    },
    {
      name: 'كلية الطب',
      description: 'إعداد أطباء متميزين في مختلف التخصصات الطبية.',
      img: '/assets/computer.png'
    },
    {
      name: 'كلية الآثار',
      description: 'دراسة التراث والآثار المصرية القديمة وترميمها.',
      img: '/assets/computer.png'
    }
  ];
}
