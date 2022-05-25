import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const LOAD_PRODUCTS = createAction(
  '[Products] Load Productss'
);

export const LOAD_PRODUCTS_SUCCESS = createAction(
  '[Products] Load Productss: Success',
  props<{ data: Product[] }>()
);

export const LOAD_PRODUCTS_FAILURE = createAction(
  '[Products] Load Productss: Failure',
  props<{ errorMessage: string }>()
);
