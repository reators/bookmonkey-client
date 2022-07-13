import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {

  isbn: string = '';
  book!: Book;
  book$!: Observable<Book>;
  bookApiSubscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private bookApi: BookApiService) { }

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params)=> this.bookApi.getBookByIsbn(params['isbn']))
    );
    this.bookApiSubscription = this.book$.subscribe(x => this.book = x);
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  update(): void {

    console.table(this.book);
  }
}
