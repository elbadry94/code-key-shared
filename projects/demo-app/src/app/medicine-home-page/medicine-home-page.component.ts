import { Component, OnInit } from '@angular/core';
import { DepartmentsComponent, HeroSlide, MedicineFooterComponent, MedicineHeroSectionComponent, MedicineLogoBarComponent, MedicineMenuBarComponent, MedicineNewsComponent, ServicesComponent } from '@codekey-shared/code-key-shared-ui';

@Component({
  selector: 'app-medicine-home-page',
  standalone: true,
  imports: [
    MedicineLogoBarComponent,
    MedicineMenuBarComponent,
    MedicineHeroSectionComponent,
    MedicineNewsComponent,
    ServicesComponent,
    MedicineFooterComponent,
    DepartmentsComponent,
  ],
  templateUrl: './medicine-home-page.component.html',
  styleUrls: ['./medicine-home-page.component.css']
})
export class MedicineHomePageComponent implements OnInit {

  logoData = {
    logoPath: 'assets/images/logo.png',
    logoAltText: 'Faculty Logo',
    title: 'كلية الطب'
  };
  contactInfo = {
    address: '525 W Slauson Ave, LA, CA 90056, USA',
    phone: '(555) 555-1234',
    email: 'info@medicare.com'
  };

  menuTabs = [
    { id: '1', title: 'الرئيسية', target: '/home', order: 1, menuTypeId: 'main' },
    { id: '2', title: 'الأقسام', target: '/departments', order: 2, menuTypeId: 'main' }
  ];

  slides : HeroSlide []= [
    { id: 1, imageUrl: 'assets/images/hero1.jpg', title: 'مرحبا بكم في كلية الطب', subtitle: 'تعلم، اكتشف، تميز', position:'left' },
    { id: 2, imageUrl: 'assets/images/hero2.jpg', title: 'أحدث التقنيات الطبية', subtitle: 'تعليم متطور', position: 'center' }
  ];

  newsItems = [
    { id: 1, title: 'افتتاح مركز جديد', excerpt: 'تم افتتاح مركز جديد للأبحاث الطبية...', author: 'د. أحمد', specialty: 'أبحاث', date: '2025-09-01', imageUrl: 'assets/images/news1.jpg', readMoreUrl: '#' },
    { id: 2, title: 'مؤتمر طبي', excerpt: 'انعقاد مؤتمر طبي عالمي...', author: 'د. سارة', specialty: 'مؤتمرات', date: '2025-08-15', imageUrl: 'assets/images/news2.jpg', readMoreUrl: '#' }
  ];

  departments = [
    { id: '1', title: 'القلب', description: 'قسم القلب والأوعية الدموية.', iconPath: 'assets/images/icons/heart.png', iconAlt: 'قلب' },
    { id: '2', title: 'الأعصاب', description: 'قسم طب الأعصاب.', iconPath: 'assets/images/icons/brain.png', iconAlt: 'مخ' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
