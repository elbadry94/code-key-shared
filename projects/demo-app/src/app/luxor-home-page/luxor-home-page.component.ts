import { Component } from '@angular/core';
import { SliderComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/slider-ar/slider-ar.component';
import { ServiceSectionComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/service-section-ar/service-section-ar.component';
import { VisionComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/vision-ar/vision-ar.component';
import { NewsComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/news-ar/news-ar.component';
import { SectorsSectionComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/sectors-section-ar/sectors-section-ar.component';
import { EventsSectionComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/events-section-ar/events-section-ar.component';
import { LogoSliderComponent } from '../../../../code-key-shared-ui/src/home-page-ar/logo-slider/logo-slider.component';
import { StatisticsSectionComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/statistics-section-ar/statistics-section-ar.component';
import { ContactUsComponent } from '../../../../code-key-shared-ui/src/home-page-ar/contact-us-ar/contact-us-ar.component';
import { PhotoSliderComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/photo-slider-ar/photo-slider-ar.component';
import { AboutComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/pages/about-ar/about-ar.component';
import { FacultiesProgramsComponentAr } from '../../../../code-key-shared-ui/src/home-page-ar/pages/faculties-programs-ar/faculties-programs-ar.component';

@Component({
  selector: 'app-luxor-home-page',
  imports: [SliderComponentAr,ServiceSectionComponentAr,VisionComponentAr,NewsComponentAr
    ,SectorsSectionComponentAr,EventsSectionComponentAr,LogoSliderComponent,StatisticsSectionComponentAr,
ContactUsComponent,PhotoSliderComponentAr,AboutComponentAr,FacultiesProgramsComponentAr],
  templateUrl: './luxor-home-page.component.html',
  styleUrl: './luxor-home-page.component.scss'
})
export class LuxorHomePageComponent {

}
