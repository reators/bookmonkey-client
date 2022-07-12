import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';
import { BookComponent } from '../book/book.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: BookComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'books/detail/:isbn',
        component: BookDetailComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }