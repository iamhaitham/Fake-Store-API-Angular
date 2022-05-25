import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { LOAD_PRODUCTS, LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_SUCCESS } from './products.actions';


export const productsFeatureKey = 'products';

export interface State {
  loading: boolean;
  errorMessage: string;
  data: Product[];
}

export const initialState: State = {
  loading: false,
  errorMessage: '',
  data: [] as Product[]
};

export const productsReducer = createReducer(
  initialState,
  on(LOAD_PRODUCTS, 
    (state) => ({ ...state, loading: true })
  ),
  on(LOAD_PRODUCTS_SUCCESS, 
    (state, { data }) => ({ ...state, loading: false, data })
  ),
  on(LOAD_PRODUCTS_FAILURE, 
    (state, { errorMessage }) => ({ ...state, loading: false, errorMessage })
  )
);
