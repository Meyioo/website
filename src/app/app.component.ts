import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, ProfilePictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';
}
