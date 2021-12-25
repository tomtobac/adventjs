import canMouseEat from './challenge25.js';

describe('challenge25 tests', () => {
  const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*'],
  ];
  it("should NOT be able to find the food if it's up", () => {
    expect(canMouseEat('up', room)).toBe(false);
  });
  it("should be able to find the food if it's down", () => {
    expect(canMouseEat('down', room)).toBe(true);
  });
  it("should NOT be able to find the food if it's right", () => {
    expect(canMouseEat('right', room)).toBe(false);
  });
  it("should NOT be able to find the food if it's left", () => {
    expect(canMouseEat('left', room)).toBe(false);
  });
});
