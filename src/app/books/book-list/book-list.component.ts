import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBook } from '../shared/ibook';
import { BookService } from '../shared/book.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  private sub = new Subscription();
  constructor(private service: BookService) {}

  ngOnInit() {
    this.sub.add(
      this.service.getBooks().subscribe(
        b => (this.books = b),
        e => console.error(e),
        () => console.log('DONE!')
      )
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
