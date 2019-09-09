#!/usr/bin/env node
import program from '..';

let firstConfigValue;
let secondConfigValue;

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    firstConfigValue = firstConfig;
    secondConfigValue = secondConfig;
  });

program.parse(process.argv);
