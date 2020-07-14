import {Component, Input, OnInit} from '@angular/core';
import {IBook} from "../../interface/ibook";
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: IBook
  bookId: number

  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
    })
    this.bookService.getBookById(this.bookId).subscribe(result => {
      this.book = result
    });
  }
}
