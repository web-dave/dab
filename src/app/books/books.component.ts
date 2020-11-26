import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../app.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  animations: [fadeAnimation],
})
export class BooksComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  constructor() {}

  ngOnInit() {}
}
