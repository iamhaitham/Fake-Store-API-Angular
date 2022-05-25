import { ProductsActions } from "..";

describe('loadProductss', () => {
  it('should return an action', () => {
    expect(ProductsActions.LOAD_PRODUCTS().type).toBe('[Products] Load Productss');
  });
});
