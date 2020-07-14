import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibaryManagementComponent} from "./component/libary-management/libary-management.component";
import { LayoutComponent } from './component/layout/layout.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BookCreateComponent } from './component/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LibaryManagementComponent,
    LayoutComponent,
    BookDetailComponent,
    BookCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
