import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('rotate', [
      transition(':enter', [
        style({ transform: 'rotatex(90deg)' }),
        animate('.5s .7s ease-in-out', style({ transform: 'rotate(0deg)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor() {}
}
