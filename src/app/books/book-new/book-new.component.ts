import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup;
  save$: Observable<boolean>;
  constructor(
    private builder: FormBuilder,
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookForm = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', [Validators.required]],
      abstract: ['', [Validators.required]],
      numPages: [0, []],
      author: ['', []],
      publisher: this.builder.group({
        name: ['', []],
        url: ['', []]
      }),
      cover: ['', []]
    });
  }

  save() {
    this.save$ = this.service.createBook(this.bookForm.value).pipe(
      tap(b =>
        this.router.navigate(['..', b.isbn], { relativeTo: this.route })
      ),
      mapTo(true)
    );
  }
}
