// @ts-nocheck
import { capitalize } from '../../src/utils/capitalize';

const list = [
  {
    str: 'a_b',
    expected: 'A b',
  },
  {
    str: 'good_title',
    expected: 'Good title',
  },
  {
    str: '',
    expected: '',
  },
];

describe('should capitalize and replace underscore', () => {
  for (const { str, expected } of list) {
    it(`expect (${str} to match ${expected}`, () => {
      expect(capitalize(str)).toEqual(expected);
    });
  }
});
