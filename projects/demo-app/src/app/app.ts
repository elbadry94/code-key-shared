import { ErrorComponent } from './../../../code-key-shared-ui/src/lib/core/components/error/error.component';
import { AppLayout } from './../../../code-key-shared-ui/src/lib/layout/component/app.layout';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ErrorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
