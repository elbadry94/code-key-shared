// medicine-hero-section.component.ts
import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface HeroSlideDto {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ck-medicine-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-hero-section.component.html',
  styleUrls: ['./medicine-hero-section.component.css'],
  encapsulation: ViewEncapsulation.None // This allows global CSS variables to work
})
export class MedicineHeroSectionComponent implements OnInit, OnDestroy {
  @Input() slides!: HeroSlideDto[];
  @Input() buttonText!: string;
  @Input() buttonRoute!: string;
  @Input() autoPlayInterval!: number;
  @Input() showControls!: boolean;
  @Input() showIndicators!: boolean;

  currentSlideIndex = 0;
  isHovered = false;
  private autoPlayTimer?: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get currentSlide(): HeroSlideDto | null {
    return this.slides[this.currentSlideIndex] || null;
  }

  nextSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }

  prevSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = this.currentSlideIndex === 0
        ? this.slides.length - 1
        : this.currentSlideIndex - 1;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlideIndex = index;
    }
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.isHovered = false;
    this.startAutoPlay();
  }

  private startAutoPlay() {
    if (this.slides.length > 1) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }
}