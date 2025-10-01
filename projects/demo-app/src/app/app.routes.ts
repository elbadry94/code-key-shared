import { Routes } from '@angular/router';

import { MedicineHomePageComponent } from './medicine-home-page/medicine-home-page.component';
import { LuxorHomePageComponent } from './luxor-home-page/luxor-home-page.component';
import { ContactUsComponent } from '../../../code-key-shared-ui/src/home-page-ar/contact-us-ar/contact-us-ar.component';
import { AboutComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/pages/about-ar/about-ar.component';
import { SectorsComponent } from '../../../code-key-shared-ui/src/lib/pages/settings/sectors/Pages/sectors/sectors.component';
import { NewsComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/news-ar/news-ar.component';
import { ServiceSectionComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/service-section-ar/service-section-ar.component';
import { FacultiesProgramsComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/pages/faculties-programs-ar/faculties-programs-ar.component';
import { StudentLifeComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/pages/student-life-ar/student-life-ar.component';
import { HealthCareComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/pages/health-care-ar/health-care-ar.component';
export const routes: Routes = [
  // { path: '', component: MedicineHomePageComponent },
	{ path: '', component: LuxorHomePageComponent },
	{ path: 'about', component: AboutComponentAr },
  	{ path: 'faculties', component: FacultiesProgramsComponentAr },

	{ path: 'contact-us', component: ContactUsComponent },

	{ path: 'student-life', component: StudentLifeComponentAr },
	{ path: 'health-care', component: HealthCareComponentAr },

];
