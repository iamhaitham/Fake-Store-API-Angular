import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from '../products/products.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<string[]>;
  @Output() requestedProducts = new EventEmitter<Observable<Product[]>>();

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) { 
    this.categoriesService.loadAllCategories$();
  }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.categories$();
  }

  getProductsByCategory(selectedCategory: string): void{
    this.requestedProducts.emit(this.productsService.products$(selectedCategory));
  }

}
