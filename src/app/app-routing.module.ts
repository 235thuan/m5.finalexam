import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibaryManagementComponent} from "./component/libary-management/libary-management.component";
import {BookDetailComponent} from "./component/book-detail/book-detail.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {BookCreateComponent} from "./component/book-create/book-create.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'books',
        component: LibaryManagementComponent
      },
      {
        path: 'books/add',
        component: BookCreateComponent
      },
      {
        path: 'books/:id/edit',
        component: BookCreateComponent
      },
      {
        path: 'books/:id',
        component: BookDetailComponent
      }

    ]
  },
  { path: '**', component: LayoutComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
