import { Component } from '@angular/core';
import { SliderComponent } from '../../../../code-key-shared-ui/src/lib/home-page/slider/slider.component';
import { ServiceSectionComponent } from '../../../../code-key-shared-ui/src/lib/home-page/service-section/service-section.component';
import { VisionComponent } from '../../../../code-key-shared-ui/src/lib/home-page/vision/vision.component';
import { NewsComponent } from '../../../../code-key-shared-ui/src/lib/home-page/news/news.component';
import { SectorsSectionComponent } from '../../../../code-key-shared-ui/src/lib/home-page/sectors-section/sectors-section.component';
import { EventsSectionComponent } from '../../../../code-key-shared-ui/src/lib/home-page/events-section/events-section.component';
import { LogoSliderComponent } from '../../../../code-key-shared-ui/src/lib/home-page/logo-slider/logo-slider.component';
import { StatisticsSectionComponent } from '../../../../code-key-shared-ui/src/lib/home-page/statistics-section/statistics-section.component';
import { ContactUsComponent } from '../../../../code-key-shared-ui/src/lib/home-page/contact-us/contact-us.component';
import { PhotoSliderComponent } from '../../../../code-key-shared-ui/src/lib/home-page/photo-slider/photo-slider.component';
import { AboutComponent } from '../../../../code-key-shared-ui/src/lib/home-page/pages/about/about.component';
import { FacultiesProgramsComponent } from '../../../../code-key-shared-ui/src/lib/home-page/pages/faculties-programs/faculties-programs.component';

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
