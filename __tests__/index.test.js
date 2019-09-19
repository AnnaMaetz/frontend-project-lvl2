import fs from 'fs';
import genDiff from '../src';

test('genDiff', () => {
  const fd = fs.openSync(`${__dirname}/__fixtures__/flatJson.txt`);
  const contentFile = fs.readFileSync(fd, 'utf8');
  fs.closeSync(fd);

  expect(genDiff('before.json', 'after.json')).toEqual(contentFile);
});
