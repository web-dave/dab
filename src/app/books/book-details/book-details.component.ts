import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book.service';
import { IBook } from '../shared/ibook';

import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook>;
  einHorn = '🦄';
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit() {
    console.log(this.route);
    this.book$ = this.route.params.pipe(
      mergeMap(params => this.service.getBook(params.isbn))
    );
    setInterval(() => {
      this.einHorn = '🦄';
    }, 1500);
    // this.route.params.subscribe(params => {
    //   this.service.getBook(params.isbn).subscribe(b => (this.book = b));
    // });
  }
  addEinHorn(text: string, replacer = this.einHorn) {
    console.log('Methode', replacer);
    return text.replace(' ', replacer);
  }
}
