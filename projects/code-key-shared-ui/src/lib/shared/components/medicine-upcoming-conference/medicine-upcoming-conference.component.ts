import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Conference {
  id?: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description?: string;
  image: string;
}

@Component({
  selector: 'app-medicine-upcoming-conference',
  standalone: true,
  imports: [CommonModule, RouterModule],
   templateUrl: './medicine-upcoming-conference.component.html',
  styleUrls: ['./medicine-upcoming-conference.component.css']
})
export class MedicineUpcomingConferenceComponent {
  @Input() conference!: Conference;
  @Input() btn !: string|'Conference Details';
  @Input() section_title !: string|'Upcoming Conference';
    @Input() rout_btn_after_section !: string|'College Conferences';

  /**
   * Generic router links to be passed from parent
   */
  @Input() conferenceLink!: string;
  @Input() allConferencesLink!: string;


}
