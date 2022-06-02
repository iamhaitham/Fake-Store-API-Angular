import { createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions/login.actions';


export const loginFeatureKey = 'login';

export interface LoginState {
  logging: boolean;
  initialized: boolean;
  errorMessage: string;
}

export const initialState: LoginState = {
  logging: false,
  initialized: false,
  errorMessage: ''
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.LOGGING_IN, 
    state => ({ ...state, logging: true })
  ),
  on(LoginActions.LOGGING_IN_SUCCESS, 
    state => ({ ...state, logging: false ,initialized: true })
  ),
  on(LoginActions.LOGGING_IN_FAILURE, 
    (state, { errorMessage }) => ({ ...state, errorMessage })
  )

);
