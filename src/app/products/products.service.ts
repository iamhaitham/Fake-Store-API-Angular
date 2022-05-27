import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, ReplaySubject, take, tap } from 'rxjs';
import { CategoriesSelectors } from '../categories/store';
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
    let productsByNameAndCategory$: ReplaySubject<Product[]> = new ReplaySubject<Product[]>();

    let productsByName$ = this.store.select(ProductsSelectors.data).pipe(
      map(
        (products: Product[]) => 
        products.filter((p: Product) => (p.title.toLowerCase()).includes(productName.toLowerCase()))
      )
    );

    let selectedCategory$ = this.store.select(CategoriesSelectors.categoryName);

    combineLatest([selectedCategory$, productsByName$]).pipe( // I want to filter the products in the ngrx store (observable 1) based on the categoryName that is also in the store (observable2), so I need the 'combineLatest' operator.
      tap(([categoryName, products]) => productsByNameAndCategory$.next(
        categoryName !== 'All' ? 
          products.filter((product: Product) => product.category.toLowerCase().includes(categoryName))
          : products
      )
      ),take(1) // I have used the 'take' operator to unsubscribe from the observable.
    ).subscribe();

    return productsByNameAndCategory$.asObservable();
  }

  loading$(): Observable<boolean> {
    return this.store.select(ProductsSelectors.loading);
  }
}
