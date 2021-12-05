import createXmasTree from './challenge4.js';

describe('challenge4 tests', () => {
  it('should paint a christmas tree of height 5', () => {
    const exepcted = '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____';
    expect(createXmasTree(5)).toEqual(exepcted);
  });
});
