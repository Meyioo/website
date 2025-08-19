import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkExperienceCardComponent } from '../work-experience-card/work-experience-card.component';

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, WorkExperienceCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  host: {
    class: 'w-full',
  },
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      period: 'Jan 2020 – Present',
      responsibilities: [
        'Lead development of scalable web applications using Angular and TypeScript.',
        'Collaborated with cross-functional teams to deliver high-quality products on schedule.',
        'Mentored junior developers and conducted code reviews to ensure best practices.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Solutions',
      period: 'Mar 2018 – Dec 2019',
      responsibilities: [
        'Built responsive web applications using React, Node.js, and MongoDB.',
        'Implemented CI/CD pipelines and automated testing strategies.',
        'Collaborated with design team to create intuitive user experiences.',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: 'Jun 2016 – Feb 2018',
      responsibilities: [
        'Developed front-end features using HTML, CSS, and JavaScript.',
        'Worked on client projects and maintained existing websites.',
        'Participated in code reviews and team development meetings.',
      ],
    },
  ];

  getYearFromPeriod(period: string): string {
    // Extract year from period string (e.g., "Jan 2020 – Present" -> "2020")
    const yearMatch = period.match(/\b(20\d{2})\b/);
    return yearMatch ? yearMatch[1] : period;
  }
}
