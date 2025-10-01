import { Component } from '@angular/core';
import { SliderComponent } from '../../../../code-key-shared-ui/src/home-page-ar/slider/slider.component';
import { ServiceSectionComponent } from '../../../../code-key-shared-ui/src/home-page-ar/service-section/service-section.component';
import { VisionComponent } from '../../../../code-key-shared-ui/src/home-page-ar/vision/vision.component';
import { NewsComponent } from '../../../../code-key-shared-ui/src/home-page-ar/news/news.component';
import { SectorsSectionComponent } from '../../../../code-key-shared-ui/src/home-page-ar/sectors-section/sectors-section.component';
import { EventsSectionComponent } from '../../../../code-key-shared-ui/src/home-page-ar/events-section/events-section.component';
import { LogoSliderComponent } from '../../../../code-key-shared-ui/src/home-page-ar/logo-slider/logo-slider.component';
import { StatisticsSectionComponent } from '../../../../code-key-shared-ui/src/home-page-ar/statistics-section/statistics-section.component';
import { ContactUsComponent } from '../../../../code-key-shared-ui/src/home-page-ar/contact-us/contact-us.component';
import { PhotoSliderComponent } from '../../../../code-key-shared-ui/src/home-page-ar/photo-slider/photo-slider.component';
import { AboutComponent } from '../../../../code-key-shared-ui/src/home-page-ar/pages/about/about.component';
import { FacultiesProgramsComponent } from '../../../../code-key-shared-ui/src/home-page-ar/pages/faculties-programs/faculties-programs.component';

@Component({
  selector: 'app-luxor-home-page',
  imports: [SliderComponent,ServiceSectionComponent,VisionComponent,NewsComponent
    ,SectorsSectionComponent,EventsSectionComponent,LogoSliderComponent,StatisticsSectionComponent,
ContactUsComponent,PhotoSliderComponent,AboutComponent,FacultiesProgramsComponent],
  templateUrl: './luxor-home-page.component.html',
  styleUrl: './luxor-home-page.component.scss'
})
export class LuxorHomePageComponent {
 
}
