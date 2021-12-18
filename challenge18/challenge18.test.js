import fixFiles from './challenge18.js';

describe('challenge18 tests', () => {
  it('should return the files name with the amount', () => {
    const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
    expect(fixFiles(files)).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);
    const files2 = ['file', 'file', 'file', 'game', 'game'];
    expect(fixFiles(files2)).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)']);
    const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
    expect(fixFiles(files3)).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']);
  });
});
