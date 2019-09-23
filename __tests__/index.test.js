import fs from 'fs';
import genDiff from '../src';

const fd = fs.openSync(`${__dirname}/__fixtures__/result.txt`);
const expectedResult = fs.readFileSync(fd, 'utf8');
fs.closeSync(fd);

test('Flat JSON', () => {
  expect(genDiff(`${__dirname}/__fixtures__/before.json`, `${__dirname}/__fixtures__/after.json`)).toEqual(expectedResult);
});

test('Flat yaml', () => {
  expect(genDiff(`${__dirname}/__fixtures__/before.yml`, `${__dirname}/__fixtures__/after.yml`)).toEqual(expectedResult);
});
