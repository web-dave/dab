import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book.service';
import { IBook } from '../shared/ibook';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getBook(params.isbn).subscribe(b => (this.book = b));
    });
  }
}
