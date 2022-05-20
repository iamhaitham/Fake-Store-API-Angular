import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts$();
  }

}
