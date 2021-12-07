import contains from './challenge7.js';

describe('challenge7 tests', () => {
  it('should find the product in the store', () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: 'coca-cola',
          producto2: 'fanta',
          producto3: 'sprite',
        },
      },
      estanteria2: {
        cajon1: 'vacio',
        cajon2: {
          producto1: 'pantalones',
          producto2: 'camiseta', // <- ¡Está aquí!
        },
      },
    };
    expect(contains(almacen, 'camiseta')).toBe(true);
  });
  it('should NOT find the product in the store', () => {
    const almacen = {
      baul: {
        fondo: {
          objeto: 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando',
        },
      },
    };
    expect(contains(almacen, 'gameboy')).toBe(false);
  });
});
