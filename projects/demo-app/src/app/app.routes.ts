import { Routes } from '@angular/router';

import { MedicineHomePageComponent } from './medicine-home-page/medicine-home-page.component';
import { ContactUsComponent } from '../../../code-key-shared-ui/src/lib/home-page/contact-us/contact-us.component';
import { SectorsComponent } from '../../../code-key-shared-ui/src/lib/pages/settings/sectors/Pages/sectors/sectors.component';
import { NewsComponent } from '../../../code-key-shared-ui/src/lib/home-page/news/news.component';
import { ServiceSectionComponent } from '../../../code-key-shared-ui/src/lib/home-page/service-section/service-section.component';

export const routes: Routes = [
	{ path: '', component: MedicineHomePageComponent },
	{ path: 'contact-us', component: ContactUsComponent },
 
	// { path: 'contact-us', component: ContactUsComponent },
	// { path: 'contact-us', component: ContactUsComponent },

];
