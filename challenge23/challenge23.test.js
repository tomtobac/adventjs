import canReconfigure from './challenge23.js';

describe('challenge23 tests', () => {
  [
    [['BAL', 'LIB'], true],
    [['CON', 'JUU'], false],
    [['MMM', 'MID'], false],
    [['AA', 'MID'], false],
  ].forEach(([args, expected]) => {
    it(`canReconfigure(${args[0]}, ${args[1]}) === ${expected}`, () => {
      expect(canReconfigure(...args)).toBe(expected);
    });
  });
});
