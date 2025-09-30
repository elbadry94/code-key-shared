import { Component, Input, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-header',
  imports: [MenubarModule, ButtonModule, InputTextModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() logoPath: string = '/assets/logo2.png';
  @Input() logoWidth: string = 'auto';
  @Input() logoHeight: string = '122px';

  isScrolled = false;

  items = [
    { label: 'Student Service ' },
    { label: 'Postgraduate Service' },
    { label: 'Paper service ' },
    { label: 'Faculty Service' },
    { label: 'Search', icon: 'bi bi-search' },
    { label: ' اللغة العربية', icon: 'bi bi-translate' },
  ];

  items2 = [
    { label: 'Home', routerLink: '#' },
    { label: 'About the University', routerLink: '#about' },
    { label: 'News', routerLink: '#news' },
    { label: 'Faculties & Programs', routerLink: '#' },
    { label: 'Student Life', routerLink: '#student-life' },
    { label: 'Sectors', routerLink: '#sectors' },
    { label: 'Healthcare', routerLink: '#' },
    { label: 'Contact-Us', routerLink: '#contact-us' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
