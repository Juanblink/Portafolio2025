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
      title: 'System for Human Resources for a Motor Company',
      description: 'Comprehensive Human Resources management system designed to efficiently handle all employee-related aspects. Includes modules for employee records management, uniform allocation and tracking, vacation requests and approvals, attendance monitoring, performance evaluations, and compliance management. Streamlines internal processes, enhances communication, and ensures complete organization of the company’s human capital..',
      images: [
        'https://i.postimg.cc/gk1X1Y1H/Menu.jpg',
      ],
    },
    {
      id: 2,
      title: 'System for Overtime Management and Budget Planning',
      description: 'Robust management system for tracking employee overtime hours, creating and managing budgets, and generating detailed visualizations and reports. Features include accurate overtime registration, budget planning tools, interactive charts for data analysis, and comprehensive reporting to support informed decision-making and operational efficiency.',
 images: [
      'https://i.postimg.cc/136nQkQh/Inicio-Toyota-OVT-Personal-Microsoft-Edge.jpg', // URL directa a imagen
    ],
    },
    {
      id: 3,
      title: 'Proyect Ideando',
      description: 'This project is a lightweight internal system designed for employees of a large company to submit and share their ideas. It includes features such as user roles, a points-based system, and proposal tracking.',
      images: [
        'https://i.postimg.cc/BZL1pLVn/Ideando.jpg',
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
      
    }
  ];
}
