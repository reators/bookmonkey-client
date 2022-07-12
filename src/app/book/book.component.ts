import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books$!: Observable<Book[]>;

  constructor(
    private bookApi: BookApiService
  ) {}
  
  ngOnInit(): void {
    this.books$ = this.bookApi.getBooks();
  } 

  goToBookDetails(book: Book) {
    console.log('Navigate to book details soon ...');
    console.table(book);
  }

  bookSearchTerm: string = '';
  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
