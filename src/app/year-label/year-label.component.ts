import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-label',
  standalone: true,
  imports: [],
  templateUrl: './year-label.component.html',
  styleUrl: './year-label.component.scss',
})
export class YearLabelComponent {
  @Input() year = '';
}
