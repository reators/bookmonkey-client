import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  isbn: string = '';
  book$!: Observable<Book>;

  constructor(private route: ActivatedRoute,
              private bookApi: BookApiService) { }

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params)=> this.bookApi.getBookByIsbn(params['isbn']))
    );

    // route.params.subscribe((param: Params)=>{
    //     bookApiService.getBookByIsbn(param['isbn']).subscribe((book: Book)=>{this.book = book})
  }

}
