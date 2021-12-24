import checkIsSameTree from './challenge24.js';

describe('challenge24 tests', () => {
  const treeA = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  };
  const treeB = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
  };
  const treeC = {
    value: 1,
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  };
  const treeD = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  };
  const treeE = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  };

  [
    [[treeA, treeA], true],
    [[treeA, treeB], false],
    [[treeB, treeB], true],
    [[treeB, treeA], false],
    [[treeC, treeB], true],
    [[treeD, treeE], false],
  ].forEach(([args, expected]) => {
    it(`checkIsSameTree(${args[0]}, ${args[1]}) === ${expected}`, () => {
      expect(checkIsSameTree(...args)).toBe(expected);
    });
  });
});
