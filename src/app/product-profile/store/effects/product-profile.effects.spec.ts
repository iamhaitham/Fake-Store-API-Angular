import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductProfileEffects } from './product-profile.effects';

describe('ProductProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProductProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
