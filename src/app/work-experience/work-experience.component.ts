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
      title: 'Senior Fullstack Developer | Green IT Lead',
      company: 'Digital Venture Consultants',
      period: 'August 2022 – October 2025',
      responsibilities: [
        'Preparation and delivery of internal Green Software trainings',
        'Green Software success stories: Identify project references within ongoing projects that contribute to reducing the resource consumption of software. Measure the energy demand of software (components) before and after optimization. Work with project teams to develop use cases and prepare CO₂ data for executive management and customers.',
        'Goal: Make sustainable software solutions tangible and demonstrate their positive impact on both the environment and the economy.',
        'Supervision of an academic thesis as a subject-matter advisor for a student focusing on Green Software (measurement / use cases).',
        'Execution of customer projects in the form of requirements analyses, (software architecture), and development of (cloud-based) applications in the backend and/or frontend.',
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
