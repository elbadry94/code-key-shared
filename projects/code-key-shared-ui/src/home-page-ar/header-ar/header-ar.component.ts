import { Component, Input, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-header-ar',
  imports: [MenubarModule, ButtonModule, InputTextModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './header-ar.component.html',
  styleUrls: ['./header-ar.component.css'],
})
export class HeaderComponentAr {
  @Input() logoPath: string = '/assets/logo2.png';
  @Input() logoWidth: string = 'auto';
  @Input() logoHeight: string = '122px';

  isScrolled = false;

items = [
  { label: 'خدمة الطلاب' },
  { label: 'خدمة الدراسات العليا' },
  { label: 'الخدمة الورقية' },
  { label: 'خدمة أعضاء هيئة التدريس' },
  { label: 'بحث', icon: 'bi bi-search' },
  { label: 'اللغة العربية', icon: 'bi bi-translate' }
];

  items2 = [
      {label: 'الرئيسية ', routerLink: '/'},
    { label: 'عن الجامعة  ', routerLink: '/about'},
    { label: 'الاخبار', routerLink: '#news' },
    { label: 'الكليات و البرامج   ', routerLink: '/faculties' },
    { label: 'حياة طلابية', routerLink: '/student-life'},
    { label: 'القطاعات', routerLink: '#sectors' },
        { label: 'الرعاية الصحية', routerLink: '/health-care' },
    { label: 'تواصل معنا ', routerLink: '#contact-us',icon:"bi bi-telephone" },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
