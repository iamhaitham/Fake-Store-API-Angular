import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product.model';

export class ProductsActions {

  static readonly LOAD_PRODUCTS = createAction(
    '[Products] Load Productss'
  );
  
  static readonly LOAD_PRODUCTS_SUCCESS = createAction(
    '[Products] Load Productss: Success',
    props<{ data: Product[] }>()
  );
  
  static readonly LOAD_PRODUCTS_FAILURE = createAction(
    '[Products] Load Productss: Failure',
    props<{ errorMessage: string }>()
  ); 

}
