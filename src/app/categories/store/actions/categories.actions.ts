import { createAction, props } from '@ngrx/store';

export class CategoriesActions {

  static readonly SET_CATEGORY = createAction(
    '[Categories] Set Category',
    props<{ categoryName: string }>()
  );

  static readonly LOAD_CATEGORIES = createAction(
    '[Categories] Load all categories'
  );

  static readonly LOAD_CATEGORIES_SUCCESS = createAction(
    '[Categories] Load all categories: Success',
    props<{ data: string[] }>()
  );

  static readonly LOAD_CATEGORIES_FAILURE = createAction(
    '[Categories] Load all categories: Failure',
    props<{ errorMessage: string }>()
  );
}