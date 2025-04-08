import { Command } from 'commander';
// import fileParser from './fileParser.js';
// import compareObjects from './compareObjects.js';
// import formatCase from './formatters/index.js';
import gendiff from './index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(gendiff(filepath1, filepath2, options.format));
  })
  .helpOption('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command');

program.parse(process.argv);
