import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface StepperItem {
  id: string;
  label: string;
  icon: string;
  active: boolean;
  completed: boolean;
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent implements OnInit {
  stepperItems: StepperItem[] = [
    { id: 'home', label: 'Home', icon: '🏠', active: true, completed: false },
    {
      id: 'work-experience',
      label: 'Work Experience',
      icon: '💼',
      active: false,
      completed: false,
    },
    {
      id: 'education',
      label: 'Education',
      icon: '🎓',
      active: false,
      completed: false,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: '🚀',
      active: false,
      completed: false,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: '📧',
      active: false,
      completed: false,
    },
  ];

  currentSection = 'home';

  ngOnInit(): void {
    this.updateStepper();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.updateStepper();
  }

  updateStepper(): void {
    const sections = this.stepperItems.map((item) => item.id);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let currentSection = 'home';

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          currentSection = sections[i];
          break;
        }
      }
    }

    this.currentSection = currentSection;
    this.updateStepperState();
  }

  updateStepperState(): void {
    this.stepperItems.forEach((item, index) => {
      const currentIndex = this.stepperItems.findIndex(
        (i) => i.id === this.currentSection
      );

      item.active = item.id === this.currentSection;
      item.completed = index < currentIndex;
    });
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

  getStepClass(item: StepperItem): string {
    let classes = 'stepper-item';

    if (item.active) {
      classes += ' active';
    } else if (item.completed) {
      classes += ' completed';
    }

    return classes;
  }
}
