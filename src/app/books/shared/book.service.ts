import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[] = [
    {
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software'
    },
    {
      title: 'REST und HTTP',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web'
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming'
    }
  ];
  url = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}
  getBooksSync(): IBook[] {
    return this.books;
  }
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
}
