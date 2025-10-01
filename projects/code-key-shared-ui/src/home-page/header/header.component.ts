import { Component, Input, OnInit, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from "@angular/router";

// import { MenuItem } from 'primeng/api';
@Component({
  selector: 'lib-header',
  imports: [MenubarModule, ButtonModule, InputTextModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() logoPath: string = '/assets/logo2.png';
  @Input() logoWidth: string = 'auto';
  @Input() logoHeight: string = '122px';

  isScrolled = false;

  // items: MenuItem[] | undefined;

  items = [
    {label: 'خدمة الطلاب'},
    { label: 'خدمة الدراسات العليا',},
    { label: 'خدمة ورقية  ' },
    { label: 'خدمة اعضاء هيئة التدريس' },
    { label: 'بحث', icon: 'bi bi-search' },
    { label: 'English', icon: 'bi bi-translate' },
  ];
  items2 = [
        {label: 'الرئيسية ', routerLink: '#'},
    { label: 'عن الجامعة  ', routerLink: '#about'},
    { label: 'الاخبار', routerLink: '#news' },
    { label: 'الكليات و البرامج   ', routerLink: '#' },
    { label: 'حياة طلابية', routerLink: '#students-life'},
    { label: 'القطاعات', routerLink: '#sectors' },
        { label: 'الراعية الصحية', routerLink: '#' },
    { label: 'تواصل معنا ', routerLink: '#contact-us',icon:"bi bi-telephone" },

  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
