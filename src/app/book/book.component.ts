import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  bookApiSubscription: Subscription = new Subscription();

  constructor(
    private bookApi: BookApiService
  ) {}
  
  ngOnInit(): void {
    this.bookApiSubscription.add(
      this.bookApi.getBooks().subscribe(booksFromApi => (this.books = booksFromApi),
                                        (e: HttpErrorResponse) => console.log(e))
    );
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
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
