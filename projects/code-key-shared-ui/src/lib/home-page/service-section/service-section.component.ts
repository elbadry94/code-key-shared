import { Input } from '@angular/core';
import { Component } from '@angular/core';
// import { NgForOf } from "@angular/common";
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'lib-service-section',
  imports: [CommonModule, NgForOf],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {
    @Input() presidentPath: string = '/assets/president.jpg';

 @Input() services: any[] = [
  { title: 'Student Services', icon: 'bi bi-person' },
  { title: 'Postgraduate Services', icon: 'bi bi-mortarboard' },
  { title: 'Faculty Services', icon: 'bi bi-people' },
  { title: 'Paperwork Services', icon: 'bi bi-file-earmark-text' },
];

}
