import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.typeWriter();
  }

  private typeWriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const text = element.textContent || '';
    element.textContent = '';

    let i = 0;
    const speed = 80; // Speed in milliseconds per character

    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };

    type();
  }
}
