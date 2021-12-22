import countDecorations from './challenge22.js';

describe('challenge22 tests', () => {
  it('should count the amount of decorations required', () => {
    const tree = {
      value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
      left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
      },
      right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
      },
    };
    expect(countDecorations(tree)).toBe(6);
    const bigTree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };
    expect(countDecorations(bigTree)).toBe(28);
  });
});
