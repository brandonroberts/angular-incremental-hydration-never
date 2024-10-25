import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-heavy',
  standalone: true,
  imports: [],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.css'
})
export class HeavyComponent {
  count = signal(0);

  ngOnInit() {
    console.log('on init');
  }

  increment() {
    this.count.update(cnt => ++cnt);
  }
}
