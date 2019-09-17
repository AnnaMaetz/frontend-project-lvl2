import fs from 'fs';
import _ from 'lodash';

const readFile = (pathToFile) => {
  const fd = fs.openSync(pathToFile);
  const contentFile = JSON.parse(fs.readFileSync(fd, 'utf8'));
  fs.closeSync(fd);
  return contentFile;
};

export default (pathToFile1, pathToFile2) => {
  const contentFile1 = readFile(pathToFile1);
  const contentFile2 = readFile(pathToFile2);

  const resultFile1 = _.reduce(contentFile1, (result, value, key) => {
    if (_.has(contentFile2, key)) {
      if (value === contentFile2[key]) {
        return result.concat(`    ${key}: ${value}\n`);
      }
      return result.concat(`  + ${key}: ${contentFile2[key]}\n  - ${key}: ${value}\n`);
    }
    return result.concat(`  - ${key}: ${value}\n`);
  }, '{ \n');

  const resultFile2 = _.reduce(contentFile2, (result, value, key) => {
    if (!_.has(contentFile1, key)) {
      return result.concat(`  + ${key}: ${value}\n`);
    }
    return result;
  }, resultFile1).concat('}');

  return resultFile2;
};
