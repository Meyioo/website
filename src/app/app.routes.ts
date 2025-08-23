import { Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent,
  },
];
