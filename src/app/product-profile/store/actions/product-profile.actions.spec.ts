import { ProductProfileActions } from "..";

describe('loadProductProfiles', () => {
  it('should return an action', () => {
    expect(ProductProfileActions.LOAD_PRODUCT(1).type).toBe('[ProductProfile] Load ProductProfiles');
  });
});
