import { initialState, productProfileReducer } from "..";

describe('ProductProfile Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = productProfileReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
