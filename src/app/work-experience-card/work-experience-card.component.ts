import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YearLabelComponent } from '../year-label/year-label.component';

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-work-experience-card',
  standalone: true,
  imports: [CommonModule, YearLabelComponent],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.scss',
})
export class WorkExperienceCardComponent {
  @Input() experience!: WorkExperience;
  @Input() isRightAligned: boolean = false;
  @Input() year: string = '';
}
