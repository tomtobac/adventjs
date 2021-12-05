import daysToXmas from './challenge5.js';

describe('challenge5 tests', () => {
  it('should return the days remaining to Dec 25th', () => {
    const date = new Date('Dec 25, 2021');
    expect(daysToXmas(date)).toBe(0);
    const date1 = new Date('Dec 26, 2021');
    expect(daysToXmas(date1)).toBe(-1);
    const date2 = new Date('Dec 31, 2021');
    expect(daysToXmas(date2)).toBe(-6);
    const date3 = new Date('Jan 1, 2022 00:00:01');
    expect(daysToXmas(date3)).toBe(-7);
    const date4 = new Date('Jan 1, 2022 23:59:59');
    expect(daysToXmas(date4)).toBe(-7);
  });
});
