import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { ProductsActions } from './products.actions';

export const productsFeatureKey = 'products';

export interface productsState {
  loading: boolean;
  errorMessage: string;
  data: Product[];
}

export const initialState: productsState = {
  loading: false,
  errorMessage: '',
  data: [] as Product[]
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.LOAD_PRODUCTS, 
    (state) => ({ ...state, loading: true })
  ),
  on(ProductsActions.LOAD_PRODUCTS_SUCCESS, 
    (state, { data }) => ({ ...state, loading: false, data })
  ),
  on(ProductsActions.LOAD_PRODUCTS_FAILURE, 
    (state, { errorMessage }) => ({ ...state, loading: false, errorMessage })
  )
);
