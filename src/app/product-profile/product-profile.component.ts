import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductProfileService } from './product-profile.service';

@Component({
  selector: 'product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent implements OnInit {
  product$: Observable<Product>;
  loading$: Observable<boolean>;
  productId: number;

  constructor(
    private productProfileService: ProductProfileService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = +(this.activatedRoute.snapshot.params['id']);
   }

  ngOnInit(): void {
    this.productProfileService.loadProduct(this.productId);
    this.loading$ = this.productProfileService.loading$();
    this.product$ = this.productProfileService.currentProduct$();
  }

}
