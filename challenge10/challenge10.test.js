import getCoins from './challenge10.js';

describe('challenge10 tests', () => {
  it('should give the minimum amount of coins possible', () => {
    expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1]);
    expect(getCoins(3)).toStrictEqual([1, 1, 0, 0, 0, 0]);
    expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0]);
    expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0]);
    expect(getCoins(100)).toStrictEqual([0, 0, 0, 0, 0, 2]);
  });
});
