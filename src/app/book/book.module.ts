import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './book-api.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { ConfirmLeaveGuard } from './confirm-leave.guard';


@NgModule({
  declarations: [
    BookCardComponent,
    BookComponent,
    BookFilterPipe,
    BookDetailComponent
  ],
  imports: [
    CommonModule, 
    BookRoutingModule,
  ],
  exports: [
    BookComponent
  ],
  providers: [
    BookApiService,
    ConfirmLeaveGuard
  ]
})
export class BookModule { }
