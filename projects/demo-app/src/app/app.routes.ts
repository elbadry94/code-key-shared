import { Routes } from '@angular/router';

import { MedicineHomePageComponent } from './medicine-home-page/medicine-home-page.component';
import { LuxorHomePageComponent } from './luxor-home-page/luxor-home-page.component';
import { ContactUsComponent } from '../../../code-key-shared-ui/src/lib/home-page/contact-us/contact-us.component';
import { AboutComponent } from '../../../code-key-shared-ui/src/lib/home-page/pages/about/about.component';
import { SectorsComponent } from '../../../code-key-shared-ui/src/lib/pages/settings/sectors/Pages/sectors/sectors.component';
import { NewsComponent } from '../../../code-key-shared-ui/src/lib/home-page/news/news.component';
import { ServiceSectionComponent } from '../../../code-key-shared-ui/src/lib/home-page/service-section/service-section.component';
import { FacultiesProgramsComponent } from '../../../code-key-shared-ui/src/lib/home-page/pages/faculties-programs/faculties-programs.component';
import { StudentLifeComponent } from '../../../code-key-shared-ui/src/lib/home-page/pages/student-life/student-life.component';
import { HealthCareComponent } from '../../../code-key-shared-ui/src/lib/home-page/pages/health-care/health-care.component';
export const routes: Routes = [
  // { path: '', component: MedicineHomePageComponent },
	{ path: '', component: LuxorHomePageComponent },
	{ path: 'about', component: AboutComponent },
  	{ path: 'faculties', component: FacultiesProgramsComponent },

	{ path: 'contact-us', component: ContactUsComponent },

	{ path: 'student-life', component: StudentLifeComponent },
	{ path: 'health-care', component: HealthCareComponent },

];
