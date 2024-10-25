import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', loadComponent: () => import('./home/home.component')
  },
  {
    path: 'about', loadComponent: () => import('./about/about.component')
  }
];
