import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  columnsNumber: number;
  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private productsService: ProductsService,
    private breakpointObserver: BreakpointObserver,
    private titleService: Title
  ) { 
    this.productsService.loadProducts$();
    this.titleService.setTitle('Products');
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(
      (result: BreakpointState) => {
        if(
          result.breakpoints[Breakpoints.XSmall]
        ){
          this.columnsNumber = 1;
        }else if(result.breakpoints[Breakpoints.Small]){
          this.columnsNumber = 2;
        }else if(
          result.breakpoints[Breakpoints.Medium]
        ){
          this.columnsNumber = 3;
        }else{
          this.columnsNumber = 5;
        }
      }
    );
    
    this.products$ = this.productsService.products$('All');
    this.loading$ = this.productsService.loading$();
  }

  displayRequestedProducts(products$: Observable<Product[]>){
    this.products$ = products$; 
  }

  findProductByName(productName: string): void {
    this.products$ = this.productsService.findProductByName(productName);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
