import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {
  @Input()
  product: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
