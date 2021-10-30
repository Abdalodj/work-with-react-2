import { formatJobList, formatFetchParams } from './index';

describe('Functions in results page', () => {
  describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
      const expectedState = 'item2,';
      expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
    });
    it('should not add a comma to the last element of the list', () => {
      const expectedState = 'item3';
      expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
    });
  });

  describe('The formatFetchParams function', () => {
    it("should add '&' symbol between parameters", () => {
      const expectation = 'a1=1&a2=2';
      expect(formatFetchParams({ 1: 1, 2: 2 })).toEqual(expectation);
    });
    it("should not add '&' symbol to only one parameter", () => {
      const expectation = 'a1=1';
      expect(formatFetchParams({ 1: 1 })).toEqual(expectation);
    });
  });
});
