import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loginFeatureKey, LoginState } from '..';

export const loginSelectFeature = createFeatureSelector<LoginState>(loginFeatureKey);

export class LoginSelectors {

    static readonly logging = createSelector(
        loginSelectFeature,
        (state: LoginState) => state.logging
    );
    
}
