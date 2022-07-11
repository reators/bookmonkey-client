import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(
    private bookApi: BookApiService
  ) {
    this.books = bookApi.getAll();
  }

  ngOnInit(): void {
  }


  // link:     "https://www.thalia.de/shop/home/artikeldetails/A1027079909",
  // link:     "https://www.amazon.de/Fit-ohne-Geräte-Körpergewicht-Weltbestseller/dp/3742304119/ref=sr_1_1",

  goToBookDetails(book: Book) {
    console.log('Navigate to book details soon ...');
    console.table(book);
  }

  bookSearchTerm: string = '';
  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
