import { Component, OnInit } from '@angular/core';
import {IBook} from "../../interface/ibook";
import {BookServiceService} from "../../service/book-service.service";

@Component({
  selector: 'app-libary-management',
  templateUrl: './libary-management.component.html',
  styleUrls: ['./libary-management.component.scss']
})
export class LibaryManagementComponent implements OnInit {
  bookList: IBook[];
  constructor(private bookService: BookServiceService) { }
  ngOnInit(): void {
    this.bookService
      .getBooks()
      .subscribe(next => (this.bookList = next), error => (this.bookList = []))
  }
  deleteBook(i) {
    if(confirm()){
      const book = this.bookList[i];
      this.bookService.deleteBook(book.id).subscribe(() => {
        this.bookList = this.bookList.filter(t => t.id !== book.id);
      });
    }

  }
}
