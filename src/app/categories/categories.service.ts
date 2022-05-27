import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesActions, CategoriesSelectors, categoriesState } from './store';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private store: Store<categoriesState>) { }

  loadAllCategories$(): void{
    this.store.dispatch(CategoriesActions.LOAD_CATEGORIES());
  } 

  categories$(): Observable<string[]> {
    return this.store.select(CategoriesSelectors.data);
  }
}
