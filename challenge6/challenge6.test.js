import sumPairs from './challenge6.js';

describe('challenge6 tests', () => {
  it('should find the sum values for given result number', () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7]);
    expect(sumPairs([-3, -2, 7, -5], 10)).toBe(null);
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2]);
    expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2]);
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5]);
  });
});
