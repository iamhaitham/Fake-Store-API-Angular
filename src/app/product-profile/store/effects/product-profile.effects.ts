import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductProfileActions } from '..';



@Injectable()
export class ProductProfileEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient  
  ) {}

  loadProductById$ = createEffect(() => this.actions$.pipe(
    ofType(ProductProfileActions.LOAD_PRODUCT),
    mergeMap((action) => this.http.get<Product>(`https://fakestoreapi.com/products/${action.currentProductId}`)
      .pipe(
        map((data: Product) => (ProductProfileActions.LOAD_PRODUCT_SUCCESS({ data }))),
        catchError((errorMessage) => of(ProductProfileActions.LOAD_PRODUCT_FAILURE({ errorMessage })))
      ))
    )
  );
}
