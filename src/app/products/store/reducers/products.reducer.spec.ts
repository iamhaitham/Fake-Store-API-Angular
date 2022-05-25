import { initialState, productsReducer } from "..";

describe('Products Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = productsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
