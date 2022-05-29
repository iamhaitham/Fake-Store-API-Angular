import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export class ProductProfileActions {

  static readonly LOAD_PRODUCT = createAction(
    '[ProductProfile] Load Product By Id',
    props<{ currentProductId: number }>()
  );

  static readonly LOAD_PRODUCT_SUCCESS = createAction(
    '[ProductProfile] Load Product By Id: Success',
    props<{ data: Product }>()
  );
  
  static readonly LOAD_PRODUCT_FAILURE = createAction(
    '[ProductProfile] Load Product By Id: Failure',
    props<{ errorMessage: string }>()
  );
}
