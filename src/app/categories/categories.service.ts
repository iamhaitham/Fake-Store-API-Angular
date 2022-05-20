import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
      private http: HttpClient
  ) { }

  getAllCategories$(): Observable<Category>{
    return this.http.get<Category>('https://fakestoreapi.com/products/categories');
  } 
  
}
