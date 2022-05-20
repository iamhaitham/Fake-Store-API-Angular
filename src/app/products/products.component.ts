import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input()
  products$: Observable<Product[]>;
  columnsNumber: number;
  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private productsService: ProductsService,
    private breakpointObserver: BreakpointObserver
  ) { }

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
        }else if(
          result.breakpoints[Breakpoints.Small] || 
          result.breakpoints[Breakpoints.Medium]
        ){
          this.columnsNumber = 2;
        }else{
          this.columnsNumber = 4;
        }
      }
    );
    this.products$ = this.productsService.getAllProducts$();
  }

  displayRequestedProducts(products$: Observable<Product[]>){
    this.products$ = products$; 
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
