import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-service-section',
  imports: [CardModule],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {
  services = [
    { icon: 'pi pi-user', title: 'خدمة الطالب' },
    { icon: 'pi pi-graduation-cap', title: 'خدمة الدراسات العليا' },
    { icon: 'pi pi-users', title: 'خدمة أعضاء هيئة التدريس' },
    { icon: 'pi pi-file', title: 'خدمة ورقية' }
  ];
}
