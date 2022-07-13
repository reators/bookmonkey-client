import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard'

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ ConfirmLeaveGuard ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(bookRoutes) ],
  exports: [ RouterModule ]
})
export class BookRoutingModule { }
