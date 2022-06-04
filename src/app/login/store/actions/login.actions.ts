import { createAction, props } from '@ngrx/store';
import { Token } from 'src/app/models/token.model';

export class LoginActions {
  static readonly LOGGING_IN = createAction(
    '[Login] Logging in',
    props<{ username: string, password: string }>()
  );

  static readonly LOGGING_IN_SUCCESS = createAction(
    '[Login] Logging in: Success',
    props<{ token: Token }>()
  );
  
  static readonly LOGGING_IN_FAILURE = createAction(
    '[Login] Load Logins Failure',
    props<{ errorMessage: string }>()
  );
}
