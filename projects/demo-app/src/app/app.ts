import { ErrorComponent } from './../../../code-key-shared-ui/src/lib/core/components/error/error.component';
import { AppLayout } from './../../../code-key-shared-ui/src/lib/layout/component/app.layout';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LuxorHomePageComponent } from './luxor-home-page/luxor-home-page.component';
import { HeaderComponent } from '../../../code-key-shared-ui/src/home-page-ar/header/header.component';
import { FooterComponent } from '../../../code-key-shared-ui/src/home-page-ar/footer/footer.component';

@Component({

  selector: 'app-root',
  imports: [RouterOutlet, LuxorHomePageComponent, HeaderComponent,FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
 scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
}
