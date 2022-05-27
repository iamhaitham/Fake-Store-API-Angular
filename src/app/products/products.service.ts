import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
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

  products$(categoryName: string): Observable<Product[]> {
    return this.store.select(ProductsSelectors.data).pipe(
      map(
        (products: Product[]) => 
          categoryName == 'All' ? 
          products : 
          products.filter((p: Product) => p.category === categoryName))
    );
  }

  findProductByName(productName: string): Observable<Product[]> {
    return this.store.select(ProductsSelectors.data).pipe(
      map(
        (products: Product[]) => 
        products.filter((p: Product) => (p.title.toLowerCase()).includes(productName.toLowerCase()))
      )
    )
  }

  loading$(): Observable<boolean> {
    return this.store.select(ProductsSelectors.loading);
  }
}
