import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-work-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.scss',
})
export class WorkExperienceCardComponent {
  @Input() experience!: WorkExperience;
  @Input() isRightAligned: boolean = false;
  @Input() year: string = '';
}
