import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './book-api.service';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    BookCardComponent,
    BookComponent,
    BookFilterPipe,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookComponent
  ],
  providers: [
    BookApiService
  ]
})
export class BookModule { }
