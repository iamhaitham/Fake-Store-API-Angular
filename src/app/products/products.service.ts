import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsActions, ProductsSelectors, productsState } from './store';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private store: Store<productsState>
  ) { }

  loadProducts$(): void {
    this.store.dispatch(ProductsActions.LOAD_PRODUCTS());
  }

  products$(): Observable<Product[]> {
    return this.store.select(ProductsSelectors.data);
  }

  loading$(): Observable<boolean> {
    return this.store.select(ProductsSelectors.loading);
  }
  
  getProductsByCategory$(selectedCategory: string): Observable<Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${selectedCategory}`);
  }
}
