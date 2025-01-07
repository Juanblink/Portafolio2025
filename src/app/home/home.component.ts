import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private text = 'Jr. Fullstack Software Developer'; // Texto a mostrar
  private speed = 100; // Velocidad de escritura (ms por carácter)
  private repeatDelay = 3000; // Retraso entre repeticiones (ms)
  private isBrowser: boolean; // Verificación del entorno

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startTypeWriterEffect();
    }
  }

  private startTypeWriterEffect(): void {
    const element = document.getElementById('typing-effect');
    if (!element) {
      return;
    }

    let i = 0;

    const type = () => {
      if (i < this.text.length) {
        element.innerHTML += this.text.charAt(i);
        i++;
        setTimeout(type, this.speed);
      } else {
        // Borrar el texto y repetir después de un retraso
        setTimeout(() => {
          element.innerHTML = '';
          i = 0; // Reiniciar el contador
          type(); // Reiniciar la animación
        }, this.repeatDelay);
      }
    };

    type(); // Inicia la animación
  }
}
