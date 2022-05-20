import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {
  @Input()
  productTitle: string;

  @Input()
  productPrice: number;
  
  constructor() {
    this.productTitle = "";
    this.productPrice = 0;
   }

  ngOnInit(): void {
  }

}
