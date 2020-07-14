import {Component, OnInit} from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookId: number;
  isShowSuccess = false;
  message: string;

  bookForm: FormGroup
  //   = new FormGroup({
  // })

  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
      this.bookService.getBookById(this.bookId).subscribe(result => {
        this.bookForm.setValue(result);
      });
    });

    this.bookForm = this.fb.group({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6)]),
      author: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.bookId) {
        this.bookService.updateBook(this.bookForm.value).subscribe(result => {
          this.isShowSuccess = true;
          this.message = 'Đã cập nhật thông tin !';
        });
    } else {
      this.bookService.createBook(this.bookForm.value).subscribe(result => {
        this.isShowSuccess = true;
        this.message = 'Đã thêm !';
        this.bookService.shouldRefresh.next('Gửi thông điệp gì đó!');
      });
    }

  }

  get Field(): FormGroup {
    return this.bookForm;
  }
}
