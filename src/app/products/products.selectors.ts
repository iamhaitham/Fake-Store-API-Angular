import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsFeatureKey, productsState } from './products.reducer';

export const productsSelectFeature = createFeatureSelector<productsState>(productsFeatureKey);
 
export class ProductsSelectors{

    static readonly loading = createSelector(
        productsSelectFeature,
        (state: productsState) => state.loading
    );

    static readonly errorMessage = createSelector(
        productsSelectFeature,
        (state: productsState) => state.errorMessage
    );

    static readonly data = createSelector(
        productsSelectFeature,
        (state: productsState) => state.data
    );
}



