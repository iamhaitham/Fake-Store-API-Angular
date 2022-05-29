import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { ProductProfileActions } from '..';


export const productProfileFeatureKey = 'productProfile';

export interface ProductProfileState {
  loading: boolean;
  errorMessage: string;
  data: Product
}

export const initialState: ProductProfileState = {
  loading: false,
  errorMessage: '',
  data: {} as Product
};

export const productProfileReducer = createReducer(
  initialState,
  on(ProductProfileActions.LOAD_PRODUCT, 
    (state) => ({ ...state, loading: true })
  ),
  on(ProductProfileActions.LOAD_PRODUCT_SUCCESS, 
    (state, { data }) => ({ ...state, loading: false, data })
  ),
  on(ProductProfileActions.LOAD_PRODUCT_FAILURE, 
    (state, { errorMessage }) => ({ ...state, loading: false, errorMessage })
  )
);
