import { createAction, props } from '@ngrx/store';

export class LoginActions {
  static readonly LOGGING_IN = createAction(
    '[Login] Logging in',
    props<{ username: string, password: string }>()
  );

  static readonly LOGGING_IN_SUCCESS = createAction(
    '[Login] Logging in: Success'
  );
  
  static readonly LOGGING_IN_FAILURE = createAction(
    '[Login] Load Logins Failure',
    props<{ errorMessage: string }>()
  );
}
