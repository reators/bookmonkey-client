import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './book-api.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { ConfirmLeaveGuard } from './confirm-leave.guard';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookCardComponent,
    BookComponent,
    BookFilterPipe,
    BookDetailComponent,
    BookNewComponent
  ],
  imports: [
    CommonModule, 
    BookRoutingModule,
    ReactiveFormsModule
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
