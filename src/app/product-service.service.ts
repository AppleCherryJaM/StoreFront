import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private categoryEndpoint: string;

  constructor(private http: HttpClient) {
    this.categoryEndpoint = "http://localhost:8090/category";
  }

  public getAllCategories(): Observable<Category[]> {
    console.debug(this.http.get<Category[]>(this.categoryEndpoint))
    return this.http.get<Category[]>(this.categoryEndpoint)
  }
}
