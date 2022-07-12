import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BookApiService {

  constructor(private http: HttpClient) { }

  backend: string = 'http://localhost:4730';

  // 'bookmonkey-api' needs to be started first in order to use these:
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.backend}/books`)
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.backend}/books/${isbn}`)
  }
}
