import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FooterContactInfo {
  logoPath: string;
  logoAlt: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface FooterQuickLink {
  text: string;
  url: string;
  icon?: string;
}

export interface FooterPost {
  title: string;
  url: string;
  date: string;
}

export interface FooterSocialLink {
  icon: string;
  url: string;
  title: string;
}

export interface FooterCopyright {
  text: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

@Component({
  selector: 'ck-medicine-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-footer.component.html',
  styleUrls: ['./medicine-footer.component.css']
})
export class MedicineFooterComponent {
  @Input() contactInfo!: FooterContactInfo;
  @Input() quickLinks!: FooterQuickLink[];
  @Input() latestPosts!: FooterPost[];
  @Input() showNewsletter!: boolean;
  @Input() quick_links!: string|'quick links';
  @Input() latest_posts!: string|'latest posts';


  @Output() linkClick = new EventEmitter<{type: string, item: any}>();
  @Output() socialClick = new EventEmitter<FooterSocialLink>();
  @Output() newsletterSubmit = new EventEmitter<string>();

  newsletterEmail: string = '';

  constructor() { }

  onLinkClick(type: string, item: any): void {
    this.linkClick.emit({ type, item });
  }

  onSocialClick(socialLink: FooterSocialLink): void {
    this.socialClick.emit(socialLink);
  }

  onNewsletterSubmit(): void {
    if (this.newsletterEmail.trim()) {
      this.newsletterSubmit.emit(this.newsletterEmail);
      this.newsletterEmail = '';
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || item.title || item.text || index;
  }
}
