import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer-ar',
  imports: [],
  templateUrl: './footer-ar.component.html',
  styleUrl: './footer-ar.component.css'
})
export class FooterComponentAr {
 @Input() logoPath: string = '/assets/logo2.png';
  @Input() logoWidth: string = 'auto';
  @Input() logoHeight: string = '155px';
}
