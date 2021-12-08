import maxProfit from './challenge8.js';

describe('challenge8 tests', () => {
  it('should return the max benefit possible for a list of prices', () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    expect(maxProfit(pricesBtc)).toEqual(16);
    const pricesEth = [10, 20, 30, 40, 50, 60, 70];
    expect(maxProfit(pricesEth)).toEqual(60);
  });
  it('should return -1 if there is no possible benefit for the list of prices', () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7];
    expect(maxProfit(pricesDoge)).toEqual(-1);
    const pricesAda = [3, 3, 3, 3, 3];
    expect(maxProfit(pricesAda)).toEqual(-1);
  });
});
