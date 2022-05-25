import * as fromProducts from './products.actions';

describe('loadProductss', () => {
  it('should return an action', () => {
    expect(fromProducts.LOAD_PRODUCTS().type).toBe('[Products] Load Productss');
  });
});
