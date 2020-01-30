import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../shared/ibook';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit() {
    console.log(this.route);
    this.book$ = this.route.params.pipe(
      mergeMap(params => this.service.getBook(params.isbn))
    );
  }
}
