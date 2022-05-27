import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categoriesFeatureKey, categoriesState } from '..';

export const productsSelectFeature = createFeatureSelector<categoriesState>(categoriesFeatureKey);

export class CategoriesSelectors {

    static readonly categoryName = createSelector(
        productsSelectFeature,
      (state: categoriesState) => state.categoryName
    );

    static readonly data = createSelector(
        productsSelectFeature,
      (state: categoriesState) => state.data
    );
}
