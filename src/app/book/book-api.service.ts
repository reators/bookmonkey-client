import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BookApiService {

  constructor(private http: HttpClient) { }

  // 'bookmonkey-api' needs to be started first in order to use this:
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books')
  }
}
