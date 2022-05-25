import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsActions } from '..';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
    ) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductsActions.LOAD_PRODUCTS),
    mergeMap(() => this.http.get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        map((data: Product[]) => (ProductsActions.LOAD_PRODUCTS_SUCCESS({ data }))),
        catchError((errorMessage) => of(ProductsActions.LOAD_PRODUCTS_FAILURE({ errorMessage })))
      ))
    )
  );

}
