import missingReindeer from './challenge14.js';

describe('challenge14 tests', () => {
  [
    [[0, 2, 3], 1],
    [[5, 6, 1, 2, 3, 7, 0], 4],
    [[0, 1], 2],
    [[3, 0, 1], 2],
    [[9, 2, 3, 5, 6, 4, 7, 0, 1], 8],
    [[0], 1],
  ].forEach(([input, expected]) => {
    it(`should return ${input} the missing reindeer ${expected}`, () => {
      expect(missingReindeer(input)).toBe(expected);
    });
  });
});
