import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductProfileService } from './product-profile.service';

@Component({
  selector: 'product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent implements OnInit, OnDestroy {
  product$: Observable<Product>;
  loading$: Observable<boolean>;
  productId: number;
  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private productProfileService: ProductProfileService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.productId = +(this.activatedRoute.snapshot.params['id']);
   }

  ngOnInit(): void {
    this.productProfileService.loadProduct(this.productId);
    this.loading$ = this.productProfileService.loading$();
    this.product$ = this.productProfileService.currentProduct$();
    this.product$.pipe(
      takeUntil(this.destroyed$),
      tap((product: Product) => this.titleService.setTitle(product.title))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }  
}
