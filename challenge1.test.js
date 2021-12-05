const contarOvejas = require('./challenge1.js');

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'Ki N M', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'azul' },
];

test('should filter sheeps by color "rojo" and their name includes "a" and "n"', () => {
  const expected = [
    { color: 'rojo', name: 'Navidad' },
    { color: 'rojo', name: 'Ki Na Ma' },
  ];
  expect(contarOvejas(ovejas)).toEqual(expected);
});
