import { Action, createReducer, on } from '@ngrx/store';
import { CategoriesActions } from '../actions/categories.actions';


export const categoriesFeatureKey = 'categories';

export interface categoriesState {
  categoryName: string;
  data: string[];
  errorMessage: string
}

export const initialState: categoriesState = {
  categoryName: 'All',
  data: [] as string[],
  errorMessage: ''
};

export const categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.SET_CATEGORY, 
    (state, { categoryName }) => ({ ...state, categoryName })
  ),
  on(CategoriesActions.LOAD_CATEGORIES, 
    (state) => ({ ...state })
  ),
  on(CategoriesActions.LOAD_CATEGORIES_SUCCESS, 
    (state, { data }) => ({ ...state, data })
  ),
  on(CategoriesActions.LOAD_CATEGORIES_FAILURE, 
    (state, { errorMessage } ) => ({ ...state, errorMessage })
  )
);
