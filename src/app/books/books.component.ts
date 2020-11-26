import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  @Input() name: string;
  @Output() highFive = new EventEmitter<string>();
  constructor(router: Router) {
    router.initialNavigation();
  }

  ngOnInit() {}
  hi() {
    this.highFive.emit('Booyaaaaa ' + this.name);
  }
}
