import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../shared/ibook';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import { mergeMap, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book$: Observable<IBook>;
  saved$: Observable<boolean>;
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route);
    this.book$ = this.route.params.pipe(
      mergeMap(params => this.service.getBook(params.isbn))
    );
  }

  save(book) {
    console.log(book);
    this.saved$ = this.service.updateBook(book).pipe(
      mapTo(true),
      tap(b => this.router.navigate(['..'], { relativeTo: this.route }))
    );
  }
}
