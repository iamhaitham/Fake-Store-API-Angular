import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Token } from 'src/app/models/token.model';
import { LoginActions } from '../actions/login.actions';



@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}

  logging$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.LOGGING_IN),
    mergeMap((payload) => this.http.post<Token>('https://fakestoreapi.com/auth/login', { username: payload.username, password: payload.password })
      .pipe(
        map(() => LoginActions.LOGGING_IN_SUCCESS()),
        catchError((errorMessage: string) => of(LoginActions.LOGGING_IN_FAILURE({ errorMessage })))
      ))
    )
  );

  initialized$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.LOGGING_IN_SUCCESS),
    tap(() => this.router.navigateByUrl('/products'))
    ), { dispatch: false });
}
