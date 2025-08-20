import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactFormData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  submitStatus: SubmitStatus | null = null;

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
