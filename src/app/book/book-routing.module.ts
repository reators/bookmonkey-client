import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard'
import { BookNewComponent } from './book-new/book-new.component';
import { BookEditComponent } from './book-edit/book-edit.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ ConfirmLeaveGuard ]
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: 'edit/:isbn',
    component: BookEditComponent,
  }
];


@NgModule({
  imports: [ RouterModule.forChild(bookRoutes) ],
  exports: [ RouterModule ]
})
export class BookRoutingModule { }
