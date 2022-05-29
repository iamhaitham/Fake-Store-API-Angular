import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productProfileFeatureKey, ProductProfileState } from '..';

export const productProfileselectFeature = createFeatureSelector<ProductProfileState>(productProfileFeatureKey);
 
export class ProductProfileSelectors {

    static readonly loading = createSelector(
        productProfileselectFeature,
        (state: ProductProfileState) => state.loading
    );

    static readonly currentProduct = createSelector(
        productProfileselectFeature,
        (state: ProductProfileState) => state.data
    );
}
