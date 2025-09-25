import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Conference {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-medicine-upcoming-conference',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="upcoming-conference-hero">
      <div class="hero-background">
        <div class="background-image" [style.background-image]="'url(' + conference.image + ')'"></div>
      </div>

      <div class="hero-content">
        <div class="content-container">

          <div class="conference-header">
            <h1 class="conference-title">{{ conference.title }}</h1>
            <!-- <h2 class="conference-subtitle">{{ conference.subtitle }}</h2> -->

            <div class="conference-badge small">
              <span class="badge-text">Next Conference</span>
              <div class="badge-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
            </div>
          </div>

          <div class="conference-details">
            <div class="detail-item">
              <i class="fas fa-calendar-day"></i>
              <span>{{ conference.date }}</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ conference.location }}</span>
            </div>
          </div>

          

        </div>

        <div class="decorative-elements">
          <div class="floating-shape shape-1"></div>
          <div class="floating-shape shape-2"></div>
          <div class="floating-shape shape-3"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
.upcoming-conference-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin: 1.5rem auto;
  max-width: 1100px;
  border-radius: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.background-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
}

.content-container {
  text-align: center;
  /* color: var(--medicine-white); */
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

/* Header */
.conference-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 2rem; */
}

.conference-title {
  font-size: 2.5rem; /* ثابت */
  font-weight: 800;
  margin: 2rem 0 0.8rem;
  color: #6D4C41;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  animation: titleSlideIn 1s ease-out;
}

.conference-subtitle {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--medicine-light-gray);
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

/* Badge */
.conference-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, var(--medicine-primary-orange), var(--medicine-primary-red));
  color: var(--medicine-white);
  padding: 0.85rem 2rem;
  border-radius: 60px;
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0.5rem 0 2rem;
  box-shadow: 0 6px 20px rgba(255, 143, 0, 0.5);
  animation: badgePulse 2s ease-in-out infinite;
}

.conference-badge.small {
  font-size: 0.9rem;
  padding: 0.4rem 1.2rem;
  margin-bottom: 2rem;
  box-shadow: 0 3px 10px rgba(255, 143, 0, 0.25);
}

.badge-icon {
  font-size: 1.2rem;
}

/* Details */
.conference-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: -1rem 0 3rem;
  flex-wrap: wrap;
  color: #6b4c3b;
  font-weight: 700;
  font-size: 1.4rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 1rem 2rem;
  border-radius: 30px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all var(--transition-normal);
}

.detail-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.3);
}

.detail-item i {
  color: var(--medicine-primary-orange);
  font-size: 1.1rem;
}

/* Description */
.conference-description-wrapper {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.conference-description {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 3rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Decorative */
.decorative-elements {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 143, 0, 0.1), rgba(183, 28, 28, 0.1));
  animation: floatShape 6s ease-in-out infinite;
}

.shape-1 { width: 100px; height: 100px; top: 10%; left: 10%; }
.shape-2 { width: 80px; height: 80px; top: 60%; right: 15%; animation-delay: 2s; }
.shape-3 { width: 60px; height: 60px; bottom: 20%; left: 20%; animation-delay: 4s; }

/* Animations */
@keyframes badgePulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
@keyframes titleSlideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes floatShape { 0%,100% { transform: translateY(0) rotate(0); opacity: .5; } 50% { transform: translateY(-20px) rotate(180deg); opacity: .8; } }

/* Responsive */
@media (max-width: 768px) {
  .conference-title { font-size: 2.5rem; }
  .conference-subtitle { font-size: 1.4rem; }
  .conference-details { gap: 1rem; }
  .detail-item { padding: 0.5rem 1rem; font-size: 0.9rem; }
  .conference-description { font-size: 1rem; }
}

@media (max-width: 480px) {
  .conference-title { font-size: 2rem; }
  .conference-subtitle { font-size: 1.2rem; }
  .conference-details { flex-direction: column; gap: 0.5rem; }
}
  `]
})
export class MedicineUpcomingConferenceComponent {
  @Input() conference!: Conference;
}
