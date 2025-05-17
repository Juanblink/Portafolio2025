import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone: true,
  animations: [
    trigger('rotateOnHover', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(18deg)' })), /* Giro de 10° */
      transition('default <=> rotated', animate('300ms ease-in-out'))
    ])
  ]
})
export class AboutMeComponent {
  imageState = 'default';

  rotateImage(state: string) {
    this.imageState = state;
  }
}