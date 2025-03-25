import { Command } from 'commander';
import fileParser from './fileParser.js';
import compareObjects from './compareObjects.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = fileParser(filepath1);
    const file2 = fileParser(filepath2);
    console.log(compareObjects(file1, file2));
  })
  .helpOption('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'display help for command');

program.parse(process.argv);
