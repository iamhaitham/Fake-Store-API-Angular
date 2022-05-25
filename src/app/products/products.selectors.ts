import { createSelector } from '@ngrx/store';
import { Product } from '../models/product.model';
 
export interface productsFeatureState {
    loading: boolean;
    errorMessage: string;
    data: Product[];
}
 
export interface productsState {
  feature: productsFeatureState;
}
 
export const productsSelectFeature = (state: productsState) => state.feature;
 
export class ProductsSelectors{

    static readonly loading = createSelector(
        productsSelectFeature,
        (state: productsFeatureState) => state.loading
    );

    static readonly errorMessage = createSelector(
        productsSelectFeature,
        (state: productsFeatureState) => state.errorMessage
    );

    static readonly data = createSelector(
        productsSelectFeature,
        (state: productsFeatureState) => state?.data
    );
}



