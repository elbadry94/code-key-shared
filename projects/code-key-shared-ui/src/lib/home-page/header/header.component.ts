import { Component, Input, OnInit } from '@angular/core';
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
  @Input() logoPath: string = 'assets/logo2.png';
  @Input() logoWidth: string = 'auto';
  @Input() logoHeight: string = '134px';

  // items: MenuItem[] | undefined;

  items = [
    {label: 'خدمة الطلاب'},
    { label: 'خدمة الدراسات العليا',},
    { label: 'خدمة ورقية  ' },
    { label: 'خدمة اعضاء هيئة التدريس' },
    { label: 'بحث', icon: 'pi pi-home' },
    { label: 'English', icon: '' },
  ];
  items2 = [
        {label: 'الرئيسية '},
    { label: 'عن الجامعة  ',},
    { label: 'الاخبار' },
    { label: 'الكليات و البرامج   ' },
    { label: 'حياة طلابية', icon: 'pi pi-home' },
    { label: 'القطاعات', icon: '' },
        { label: 'الراعية الصحية' },
    { label: 'تواصل معنا ' },

  ];
}
