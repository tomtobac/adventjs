import learn from './challenge19.js';

describe('challenge19 tests', () => {
  it('should return the two courses which fit most of our time', () => {
    expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]);
    expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2]);
  });
  it('should return the first case if there is more than one option', () => {
    expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1]);
  });
  it('should use max time available but can not be just one course', () => {
    expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]);
  });
  it('should return null if there is no option', () => {
    expect(learn(4, [10, 14, 20])).toEqual(null);
    expect(learn(5, [5, 5, 5])).toEqual(null);
  });
});
