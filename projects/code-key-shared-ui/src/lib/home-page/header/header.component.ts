import { Component, Input, OnInit, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
// import { MenuItem } from 'primeng/api';
@Component({
  selector: 'lib-header',
  imports: [MenubarModule, ButtonModule, InputTextModule, FormsModule],
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
        {label: 'الرئيسية '},
    { label: 'عن الجامعة  ',},
    { label: 'الاخبار' },
    { label: 'الكليات و البرامج   ' },
    { label: 'حياة طلابية'},
    { label: 'القطاعات' },
        { label: 'الراعية الصحية' },
    { label: 'تواصل معنا ' },

  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
