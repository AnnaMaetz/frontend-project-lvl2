import genDiff from '../src';

test('genDiff', () => {
  const result = '{ \n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  - follow: false\n  + verbose: true\n}';

  expect(genDiff('before.json', 'after.json')).toEqual(result);
});
