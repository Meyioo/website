import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.typeWriter();
      }, 100);
    }
  }

  private typeWriter(): void {
    try {
      const element = document.getElementById('typewriter');
      if (!element) {
        console.warn('Typewriter element not found');
        return;
      }

      const text = element.textContent || '';
      if (!text.trim()) {
        console.warn('No text content found for typewriter');
        return;
      }

      element.textContent = '';

      let i = 0;
      const speed = 80; // Speed in milliseconds per character

      const type = () => {
        if (i < text.length && element) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };

      type();
    } catch (error) {
      console.error('Error in typewriter:', error);
    }
  }
}
