import groupBy from './challenge9.js';

describe('challenge9 tests', () => {
  it('should be able to group by property', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], 5: ['three'] });
    expect(groupBy([{ age: 23 }, { age: 24 }], 'age')).toEqual({
      23: [{ age: 23 }],
      24: [{ age: 24 }],
    });
    expect(
      groupBy(
        [
          { title: 'JavaScript: The Good Parts', rating: 8 },
          { title: 'Aprendiendo Git', rating: 10 },
          { title: 'Clean Code', rating: 9 },
        ],
        'rating',
      ),
    ).toEqual({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    });
  });
  it('should be able to group by function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 6: [6.1, 6.3], 4: [4.2] });
    expect(
      groupBy([1397639141184, 1363223700000], (timestamp) => new Date(timestamp).getFullYear()),
    ).toEqual({ 2013: [1363223700000], 2014: [1397639141184] });
  });
});
