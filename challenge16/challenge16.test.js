import decodeNumber from './challenge16.js';

describe('challenge16 tests', () => {
  [
    ['...', 3],
    ['.,', 4],
    [';.W', NaN],
    [',...', 8],
    ['.........!', 107],
    ['.;', 49],
    ['..,', 5],
    ['..,!', 95],
    ['.;!', 49],
    ['!!!', 300],
    [';!', 50],
  ].forEach(([symbols, expected]) => {
    it(`should return ${expected} for ${symbols}`, () => {
      expect(decodeNumber(symbols)).toBe(expected);
    });
  });
});
