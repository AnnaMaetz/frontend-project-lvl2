import fs from 'fs';
import genDiff from '../src';

const fd = fs.openSync(`${__dirname}/__fixtures__/result.txt`);
const expectedResult = fs.readFileSync(fd, 'utf8');
fs.closeSync(fd);

test.each([['Flat JSON', 'json', expectedResult], ['Flat yaml', 'yml', expectedResult], ['Flat ini', 'ini', expectedResult]])(
  '%s',
  (name, format, expected) => {
    expect(genDiff(`${__dirname}/__fixtures__/before.${format}`, `${__dirname}/__fixtures__/after.${format}`)).toBe(expected);
  },
);
