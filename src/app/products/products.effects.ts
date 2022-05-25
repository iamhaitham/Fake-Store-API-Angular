import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from '../models/product.model';
import { LOAD_PRODUCTS, LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_SUCCESS } from './products.actions';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
    ) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_PRODUCTS),
    mergeMap(() => this.http.get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        map((data: Product[]) => (LOAD_PRODUCTS_SUCCESS({ data }))),
        catchError((errorMessage) => of(LOAD_PRODUCTS_FAILURE({ errorMessage })))
      ))
    )
  );

}
