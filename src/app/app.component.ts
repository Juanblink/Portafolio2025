import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from '@studio-freight/lenis';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent }  from './timeline/timeline.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ButtonHomeComponent } from './button-home/button-home.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, ProjectsComponent, TimelineComponent, AboutMeComponent, ButtonHomeComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  private lenis!: Lenis;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initCanvasBackground();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initLenis();
    }
  }

  private initLenis() {
    this.lenis = new Lenis({
      lerp: 0.1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    this.ngZone.runOutsideAngular(() => {
      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }

private initCanvasBackground() {
  const canvas = document.getElementById('animated-background') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d')!;
  const points: { x: number; y: number; vx: number; vy: number }[] = [];
  const mouse = { x: 0, y: 0, active: false };

  const pointCount = window.innerWidth < 768 ? 50 : 100; // Menos puntos en móviles

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < pointCount; i++) {
    points.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    });
  }

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