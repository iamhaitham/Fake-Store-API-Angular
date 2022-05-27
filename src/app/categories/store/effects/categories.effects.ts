import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CategoriesActions } from '../actions/categories.actions';



@Injectable()
export class CategoriesEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CategoriesActions.LOAD_CATEGORIES),
    mergeMap(() => this.http.get<string[]>('https://fakestoreapi.com/products/categories')
      .pipe(
        map((data: string[]) => (CategoriesActions.LOAD_CATEGORIES_SUCCESS({ data }))),
        catchError((errorMessage) => of(CategoriesActions.LOAD_CATEGORIES_FAILURE({ errorMessage })))
      ))
    )
  );

}
