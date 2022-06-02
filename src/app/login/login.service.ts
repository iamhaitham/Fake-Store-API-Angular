import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';
import { LoginActions, LoginSelectors } from './store';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  login$(username: string, password: string): Observable<Token>{
    this.store.dispatch(LoginActions.LOGGING_IN({ username, password }));
    return this.http.post<Token>('https://fakestoreapi.com/auth/login', { username, password });
  }

  logging$(): Observable<boolean> {
    return this.store.select(LoginSelectors.logging);
  }
}
