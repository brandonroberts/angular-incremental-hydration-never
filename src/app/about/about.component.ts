import { Component, signal } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  me = signal(false);
}
