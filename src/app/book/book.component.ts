import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private bookApi: BookApiService
  ) {}
  
  ngOnInit(): void {
    this.books$ = this.bookApi.getBooks();
  } 

  goToBookDetails(book: Book) {
    console.log('Navigate to book details');
    console.table(book);
    this.router.navigate(['books', 'detail', book.isbn])
  }

  bookSearchTerm: string = '';
  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
