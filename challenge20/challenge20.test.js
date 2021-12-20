import pangram from './challenge20.js';

describe('challenge20 tests', () => {
  it('should have all the spanish alphabtic letters', () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBe(true);
    expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibe!')).toBe(false);
    expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBe(
      false,
    );
    expect(pangram('De la a a la z, nos faltan letras')).toBe(false);
  });
});
