import { ErrorComponent } from './../../../code-key-shared-ui/src/lib/core/components/error/error.component';
import { AppLayout } from './../../../code-key-shared-ui/src/lib/layout/component/app.layout';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LuxorHomePageComponent } from './luxor-home-page/luxor-home-page.component';
import { HeaderComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/header-ar/header-ar.component';
import { FooterComponentAr } from '../../../code-key-shared-ui/src/home-page-ar/footer-ar/footer-ar.component';

@Component({

  selector: 'app-root',
  imports: [RouterOutlet, LuxorHomePageComponent, HeaderComponentAr,FooterComponentAr
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
