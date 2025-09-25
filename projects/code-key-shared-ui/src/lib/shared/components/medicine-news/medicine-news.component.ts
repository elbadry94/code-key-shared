import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  specialty: string;
  date: string;
  imageUrl: string;
  readMoreUrl?: string;
}

@Component({
  selector: 'ck-medicine-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-news.component.html',
  styleUrls: ['./medicine-news.component.css']
})
export class MedicineNewsComponent implements OnInit, OnDestroy {
  @Input() newsItems!: NewsItem[];
  @Input() sectionTitle!: string;
  @Input() sectionSubtitle!: string;
  @Input() showTitle!: boolean;
  @Input() itemsPerView!: number;
  @Input() autoPlay!: boolean;
  @Input() autoPlayInterval!: number;
  @Input() isRTL!: boolean;

  currentIndex = 0;
  private autoPlayTimer?: any;

  ngOnInit() {
    if (this.autoPlay && this.newsItems.length > this.itemsPerView) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get visibleItems(): NewsItem[] {
    if (this.newsItems.length === 0) return [];
    const endIndex = Math.min(this.currentIndex + this.itemsPerView, this.newsItems.length);
    return this.newsItems.slice(this.currentIndex, endIndex);
  }

  get hasNext(): boolean {
    return this.currentIndex + this.itemsPerView < this.newsItems.length;
  }

  get hasPrev(): boolean {
    return this.currentIndex > 0;
  }

  nextSlide() {
    if (this.hasNext) {
      this.currentIndex += this.itemsPerView;
    }
  }

  prevSlide() {
    if (this.hasPrev) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerView);
    }
  }

  goToPage(pageIndex: number) {
    this.currentIndex = pageIndex * this.itemsPerView;
  }

  getCurrentPageIndex(): number {
    return Math.floor(this.currentIndex / this.itemsPerView);
  }

  getPaginationPages(): any[] {
    const totalPages = Math.ceil(this.newsItems.length / this.itemsPerView);
    return new Array(totalPages);
  }

  onCardClick(event: Event, readMoreUrl?: string) {
    if (event.target && (event.target as HTMLElement).closest('.read-more')) {
      return; // Let the read more link handle the click
    }
    if (readMoreUrl && readMoreUrl !== '#') {
      window.open(readMoreUrl, '_blank');
    }
  }

  onReadMoreClick(event: Event) {
    event.stopPropagation();
  }

  private startAutoPlay() {
    if (this.newsItems.length > this.itemsPerView) {
      this.autoPlayTimer = setInterval(() => {
        if (this.hasNext) {
          this.nextSlide();
        } else {
          this.currentIndex = 0; // Loop back to beginning
        }
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  getDateParts(dateString: string): { day: string; month: string } {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' })
    };
  }

  trackByFn(index: number, item: NewsItem): number {
    return item.id;
  }
}
