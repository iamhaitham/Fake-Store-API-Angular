import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<string[]>;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAllCategories$();
  }

}
