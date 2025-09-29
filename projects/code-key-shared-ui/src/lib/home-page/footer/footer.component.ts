import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 @Input() logoPath: string = '/assets/logo2.png';
  @Input() logoWidth: string = 'auto';
  @Input() logoHeight: string = '155px';
}
