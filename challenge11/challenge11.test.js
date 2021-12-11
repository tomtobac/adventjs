import shouldBuyFidelity from './challenge11.js';

describe('challenge11 tests', () => {
  // Array.from(Array(100), (_, idx) => idx + 1).forEach((idx) => {
  //   it(`should return ${idx > 23 ? 'true' : 'false'} if we go ${idx} times`, () => {
  //     expect(shouldBuyFidelity(idx)).toBe(idx > 23);
  //   });
  // });
  it('should return true if total price is lower with the fidelity card', () => {
    expect(shouldBuyFidelity(0)).toBe(false);
    expect(shouldBuyFidelity(1)).toBe(false);
    expect(shouldBuyFidelity(2)).toBe(false);
    expect(shouldBuyFidelity(3)).toBe(false);
    expect(shouldBuyFidelity(4)).toBe(false);
    expect(shouldBuyFidelity(22)).toBe(false);
    expect(shouldBuyFidelity(23)).toBe(false);
    expect(shouldBuyFidelity(100)).toBe(true);
  });
});
