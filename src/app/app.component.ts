import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moin DAB';
  i = 0;
  constructor() {
    setTimeout(() => {
      this.i++;
    }, 2500);
  }
}
