import checkSledJump from './challenge15.js';

describe('challenge15 tests', () => {
  [
    [[1, 2, 3, 2, 1], true],
    [[0, 1, 0], true],
    [[0, 3, 2, 1], true],
    [[0, 1000, 1], true],
    [[2, 4, 4, 6, 2], false],
    [[1, 2, 3], false],
    [[1, 2, 3, 2, 1, 2, 3], false],
    [[0, 0, 0], false],
  ].forEach(([input, expected]) => {
    it(`[${input}] is${expected ? '' : ' not'} making a parabolic`, () => {
      expect(checkSledJump(input)).toBe(expected);
    });
  });
});
