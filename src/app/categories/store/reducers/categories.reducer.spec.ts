import { categoriesReducer, initialState } from './categories.reducer';

describe('Categories Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = categoriesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
