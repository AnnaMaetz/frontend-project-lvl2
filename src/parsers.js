import yaml from 'js-yaml';
import ini from 'ini';

const parser = {
  '.json': (content) => JSON.parse(content),
  '.yml': (content) => yaml.safeLoad(content),
  '.ini': (content) => ini.parse(content),
};

export default (contentFile, format) => parser[format](contentFile);
