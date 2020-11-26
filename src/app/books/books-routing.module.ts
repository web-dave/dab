import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';
import { StayhereGuard } from './shared/stayhere.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        data: {
          animation: 'List',
        },
      },
      {
        path: 'new',
        component: BookNewComponent,
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
        canDeactivate: [StayhereGuard],
        data: {
          animation: 'Details',
        },
      },
      {
        path: ':author',
        component: BookDetailsComponent,
        canDeactivate: [StayhereGuard],
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
