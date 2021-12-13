import wrapGifts from './challenge13.js';

describe('challenge13 tests', () => {
  [
    [[], []],
    [
      ['📷', '⚽️'],
      ['****', '*📷*', '*⚽️*', '****'],
    ],
    [
      ['🏈🎸', '🎮🧸'],
      ['******', '*🏈🎸*', '*🎮🧸*', '******'],
    ],
    [['📷'], ['****', '*📷*', '****']],
  ].forEach(([input, expected]) => {
    it(`should be wrapped as ${expected} if gifts are ${input}`, () => {
      expect(wrapGifts(input)).toEqual(expected);
    });
  });
});
