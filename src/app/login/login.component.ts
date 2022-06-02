import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Token } from '../models/token.model';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroyed$: Subject<boolean> = new Subject<boolean>(); 
  logging$: Observable<boolean>;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.logging$ = this.loginService.logging$();
  }

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  login(username: string, password: string): void {
    if(username === 'mor_2314' && password === '83r5^_'){
     this.loginService.login$(username, password).pipe(
       takeUntil(this.destroyed$),
       tap((token: Token) => localStorage.setItem('token', token.token))
     ).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
