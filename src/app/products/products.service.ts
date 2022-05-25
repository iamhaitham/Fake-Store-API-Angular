import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { productsState } from './products.reducer';
import { ProductsSelectors } from './products.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private store: Store<productsState>
  ) { }


  loading$(): Observable<boolean> {
    return this.store.select(ProductsSelectors.loading);
  }
  
  getProductsByCategory$(selectedCategory: string): Observable<Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${selectedCategory}`);
  }
}
