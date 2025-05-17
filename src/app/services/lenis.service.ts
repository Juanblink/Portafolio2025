import { Injectable, NgZone } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Injectable({
  providedIn: 'root'
})
export class LenisService {
  private lenis!: Lenis;

  constructor(private ngZone: NgZone) {}

  init() {
    this.lenis = new Lenis({
      lerp: 0.1,                        // suavizado, puede ajustarse
      orientation: 'vertical',          // dirección scroll
      gestureOrientation: 'vertical',   // dirección del gesto
      wheelMultiplier: 1,               // multiplicador rueda mouse
      touchMultiplier: 2,               // multiplicador tactil (touch)
      infinite: false                   // si quieres scroll infinito
    });

    this.ngZone.runOutsideAngular(() => {
      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }
}
