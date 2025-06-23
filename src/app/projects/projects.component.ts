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
      title: 'System for Human Resources',
      description: 'Comprehensive Human Resources management system designed to efficiently handle all employee-related aspects. Includes modules for employee records management, uniform allocation and tracking, vacation requests and approvals, attendance monitoring, performance evaluations, and compliance management. Streamlines internal processes, enhances communication, and ensures complete organization of the company’s human capital..',
      images: [
        '',
      ],
    },
    {
      id: 2,
      title: 'System for Overtime Management and Budget Planning',
      description: 'Robust management system for tracking employee overtime hours, creating and managing budgets, and generating detailed visualizations and reports. Features include accurate overtime registration, budget planning tools, interactive charts for data analysis, and comprehensive reporting to support informed decision-making and operational efficiency.',
 images: [
      '', // URL directa a imagen
    ],
    },
    {
      id: 3,
      title: 'Proyect for Ideas',
      description: 'This project is a lightweight internal system designed for employees of a large company to submit and share their ideas. It includes features such as user roles, a points-based system, and proposal tracking.',
      images: [
        '',
      ],
    },
    {
      id: 4,
      title: 'To do List Application',
      description: 'A simple and intuitive todo list application to help users manage their tasks effectively.',
      images: [
        'https://i.postimg.cc/1Rgj3TY0/Noteapss.jpg',
      ],
      
    }
  ];
}
