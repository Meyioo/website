import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss',
})
export class ProfilePictureComponent {
  @Input() imageSrc: string = '';
  @Input() altText: string = 'Profile Picture';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() fallbackText: string = '';

  get sizeClasses(): string {
    const sizeMap = {
      sm: 'w-12 h-12 text-sm',
      md: 'w-16 h-16 text-base',
      lg: 'w-24 h-24 text-lg',
      xl: 'w-32 h-32 text-xl',
    };
    return sizeMap[this.size];
  }

  get fallbackInitials(): string {
    if (!this.fallbackText) return '';
    return this.fallbackText
      .split(' ')
      .map((name) => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
