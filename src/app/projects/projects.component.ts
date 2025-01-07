import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'ToyotaHR',
      description: 'Descripción breve del proyecto 1.',
      images: [
        'https://via.placeholder.com/400x200/ff7f7f/333333?text=Image+1',
        'https://via.placeholder.com/400x200/85e085/333333?text=Image+2',
        'https://via.placeholder.com/400x200/7f7fff/333333?text=Image+3',
      ],
    },
    {
      id: 2,
      title: 'ToyotaOVT',
      description: 'Descripción breve del proyecto 2.',
      images: [
        'https://via.placeholder.com/400x200/ff7f7f/333333?text=Image+1',
        'https://via.placeholder.com/400x200/85e085/333333?text=Image+2',
        'https://via.placeholder.com/400x200/7f7fff/333333?text=Image+3',
      ],
    },
    {
      id: 3,
      title: 'Skyworks Warehouses',
      description: 'Descripción breve del proyecto 3.',
      images: [
        'https://via.placeholder.com/400x200/ff7f7f/333333?text=Image+1',
        'https://via.placeholder.com/400x200/85e085/333333?text=Image+2',
        'https://via.placeholder.com/400x200/7f7fff/333333?text=Image+3',
      ],
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Descripción breve del proyecto 4.',
      images: [
        'https://via.placeholder.com/400x200/ff7f7f/333333?text=Image+1',
        'https://via.placeholder.com/400x200/85e085/333333?text=Image+2',
        'https://via.placeholder.com/400x200/7f7fff/333333?text=Image+3',
      ],
    },
  ];
}
