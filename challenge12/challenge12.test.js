import getMinJump from './challenge12.js';

describe('challenge12 tests', () => {
  [
    [[5, 3, 6, 8, 7], 9],
    [[2, 4, 6, 8, 10], 7],
    [[1, 2, 3, 5], 4],
    [[3, 7, 5], 2],
    [[9, 5, 1], 2],
  ].forEach(([input, expected]) => {
    it(`getMinJump([${input}]) should return ${expected}`, () => {
      expect(getMinJump(input)).toBe(expected);
    });
  });
});
