import isValid from './challenge3.js';

describe('challenge3 tests', () => {
  it('should check if the letter is valid or not', () => {
    expect(isValid('bici coche (balón) bici coche peluche')).toBe(true);
    expect(isValid('bici coche (balón) () bici coche peluche')).toBe(false);
    expect(isValid('peluche (bici [coche) bici coche balón')).toBe(false);
  });
});
