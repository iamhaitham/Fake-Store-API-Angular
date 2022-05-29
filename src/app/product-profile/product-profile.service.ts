import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductProfileActions, ProductProfileSelectors } from './store';

@Injectable({
  providedIn: 'root'
})
export class ProductProfileService {

  constructor(
    private store: Store
  ) { }

  loadProduct(currentProductId: number): void {
    this.store.dispatch(ProductProfileActions.LOAD_PRODUCT({ currentProductId }));
  }

  loading$(): Observable<boolean> {
    return this.store.select(ProductProfileSelectors.loading);
  }

  currentProduct$(): Observable<Product> {
    return this.store.select(ProductProfileSelectors.currentProduct);
  }
}
