import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/ibook';
import { BookService } from '../shared/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  constructor(private service: BookService) {}

  ngOnInit() {
    this.books$ = this.service.getBooks();
  }
}
