// @ts-nocheck
import secureUrl from '../../src/utils/secureUrl';

const list = ['https://foo.bar', 'http://foo.bar', 'https://foohttp.bar'];

describe('convert http to https', () => {
  for (const [k, url] of Object.entries(list)) {
    it(`get secure url for ${k}`, () => {
      expect(secureUrl(url)).toMatchSnapshot();
    });
  }
});
