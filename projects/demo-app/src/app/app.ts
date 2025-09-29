import { ErrorComponent } from './../../../code-key-shared-ui/src/lib/core/components/error/error.component';
import { AppLayout } from './../../../code-key-shared-ui/src/lib/layout/component/app.layout';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../code-key-shared-ui/src/lib/home-page/header/header.component';
import { SliderComponent } from '../../../code-key-shared-ui/src/lib/home-page/slider/slider.component';
import { ServiceSectionComponent } from '../../../code-key-shared-ui/src/lib/home-page/service-section/service-section.component';
import { VisionComponent } from '../../../code-key-shared-ui/src/lib/home-page/vision/vision.component';
import { NewsComponent } from '../../../code-key-shared-ui/src/lib/home-page/news/news.component';
import { SectorsSectionComponent } from '../../../code-key-shared-ui/src/lib/home-page/sectors-section/sectors-section.component';
import { EventsSectionComponent } from '../../../code-key-shared-ui/src/lib/home-page/events-section/events-section.component';
import { LogoSliderComponent } from '../../../code-key-shared-ui/src/lib/home-page/logo-slider/logo-slider.component';
import { StatisticsSectionComponent } from '../../../code-key-shared-ui/src/lib/home-page/statistics-section/statistics-section.component';
import { ContactUsComponent } from '../../../code-key-shared-ui/src/lib/home-page/contact-us/contact-us.component';
import { FooterComponent } from '../../../code-key-shared-ui/src/lib/home-page/footer/footer.component';
@Component({

  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,SliderComponent,ServiceSectionComponent,VisionComponent,NewsComponent
    ,SectorsSectionComponent,EventsSectionComponent,LogoSliderComponent,StatisticsSectionComponent,
ContactUsComponent,FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
