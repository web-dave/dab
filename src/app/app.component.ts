import { Component } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter$ = interval(1500).pipe(map(n => 1));
  title = 'Moin DAB';
  i = 0;
  constructor() {
    setTimeout(() => {
      this.i++;
    }, 2500);
  }

  oho(e) {
    console.log(e);
  }
}
