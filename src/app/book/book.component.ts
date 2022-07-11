import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookApi: BookApiService
  ) {
    bookApi.getBooks().subscribe(booksFromApi => (this.books = booksFromApi));
  }

  ngOnInit(): void {
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details soon ...');
    console.table(book);
  }

  bookSearchTerm: string = '';
  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }

  // TODO: add unsubscribe
}
