import { Routes } from '@angular/router';

import { MedicineHomePageComponent } from './medicine-home-page/medicine-home-page.component';
import { AboutComponent } from '../../../code-key-shared-ui/src/home-page/pages/about/about.component';
import { NewsComponent } from '../../../code-key-shared-ui/src/home-page/news/news.component';
import { SectorsSectionComponent } from '../../../code-key-shared-ui/src/home-page/sectors-section/sectors-section.component';
import { ContactUsComponent } from '../../../code-key-shared-ui/src/home-page/contact-us/contact-us.component';
import { PhotoSliderComponent } from '../../../code-key-shared-ui/src/home-page/photo-slider/photo-slider.component';
import { EventsSectionComponent } from '../../../code-key-shared-ui/src/home-page/events-section/events-section.component';

export const routes: Routes = [
	{ path: '', component: MedicineHomePageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    { path: 'sectors', component: SectorsSectionComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'student-life', component: PhotoSliderComponent },
    { path: 'events', component: EventsSectionComponent },
];
