import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certifications = [
    {
      id: 1,
      title: 'Scrum Fundamentals',
      by: 'Scrum.org',
      description: 'Certification that demonstrates understanding of the Scrum framework and agile project management principles.',
      images: [
        'https://i.postimg.cc/Fs1RkXb9/Scrum.jpg',
      ],
    },
    {
      id: 2,
      title: 'Java Basic Certification',
      by: 'HackerRank',
      description: 'Introductory Java certification that validates foundational knowledge of Java programming concepts and techniques.',
      images: [
        'https://i.postimg.cc/YqfHSXZp/Hacker-Rank-Google-Chrome.jpg',
      ],
    },
    {
      id: 3,
      title: 'Java Fundamentals',
      by: 'iTJ',
      description: 'Validates foundational knowledge of Java programming concepts and techniques.',
      images: [
        'https://i.postimg.cc/PJJSk5gp/Certificate-Java-Fundamentals-Juan-Manuel-Ch-vez-Peralta-2-pdf-Google-Chrome.jpg',
      ],
    },
  ];
}

