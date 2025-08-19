import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';
  isMobileMenuOpen = false;

  contactFormData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  submitStatus: SubmitStatus | null = null;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitStatus = null;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      this.isSubmitting = false;

      // For demo purposes, always show success
      // In real app, handle actual form submission and response
      this.submitStatus = {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      };

      // Reset form after successful submission
      this.contactFormData = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      };
    }, 1500);
  }
}
