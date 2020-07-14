import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {IBook} from "../interface/ibook";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly API_URL = 'http://localhost:3000/books'
  shouldRefresh = new Subject<any>();

  constructor(private http:HttpClient) { }


  getBooks(count = 10): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL).pipe(
      map(response => response.filter((book, i) => i < count))
    );
  }
  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.API_URL}/${book.id}`, book);
  }
}
