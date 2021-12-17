import countPackages from './challenge17.js';

describe('challenge17 tests', () => {
  it('should return the total of packages', () => {
    const carriers = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []],
    ];
    expect(countPackages(carriers, 'lolivier')).toBe(27);
    expect(countPackages(carriers, 'jesuspoleo')).toBe(4);
    expect(countPackages(carriers, 'camila')).toBe(15);
    expect(countPackages(carriers, 'facundocapua')).toBe(2);
  });
});
