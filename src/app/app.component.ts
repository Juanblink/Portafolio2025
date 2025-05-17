import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component'; // Importar ProjectsComponent
import { TimelineComponent }  from './timeline/timeline.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,HomeComponent,ProjectsComponent,TimelineComponent,AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecutar en el navegador
      this.initCanvasBackground();
    }
  }

  private initCanvasBackground() {
    const canvas = document.getElementById('animated-background') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    const points: { x: number; y: number; vx: number; vy: number }[] = [];
    const mouse = { x: 0, y: 0, active: false };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Crear puntos
    for (let i = 0; i < 100; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    // Dibujar puntos y líneas
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const other = points[j];
          const dist = Math.hypot(point.x - other.x, point.y - other.y);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 255, 0, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      if (mouse.active) {
        points.forEach((point) => {
          const dist = Math.hypot(point.x - mouse.x, point.y - mouse.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 255, 0, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }

      requestAnimationFrame(draw);
    };

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    draw();
  }
}
