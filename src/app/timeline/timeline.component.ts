// src/app/timeline/timeline.component.ts

import { Component }       from '@angular/core';
import { CommonModule }    from '@angular/common';
import { TimelineModule }  from 'primeng/timeline';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  iconClass: string;    // ← Aquí lo agregas
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ CommonModule, TimelineModule ],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  events: TimelineEvent[] = [
    {
 date: 'July 2024',
      title: 'Graduate College',
      description: 'Earned a Bachelor’s degree in Computer Science from UABC.',
      iconClass:   'pi pi-graduation-cap'
      
    },
    {
      date: 'August 2024',
      title: 'Started Working with GrupoLAN',
      description: 'Joined GrupoLAN as a JR software developer.',
      iconClass:   'pi pi-briefcase'
    },
    {
    date: 'January 2025',
      title: 'Assigned Full-Time to Toyota Motors',
      description: 'Assigned full-time as a Full-Stack Developer at Toyota Motors.',
      iconClass:   'pi pi-car'
    }
  ];
}
