import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products/products.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<string[]>;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAllCategories$();
  }

  getProductsByCategory(selectedCategory: string): void{
    if(selectedCategory == 'All'){
      this.productsService.getAllProducts$().subscribe();
    }else{
      this.categoriesService.getProductsByCategory$(selectedCategory).subscribe();
    }
  }

}
