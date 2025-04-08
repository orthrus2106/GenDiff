import { Command } from 'commander';
import fileParser from './fileParser.js';
import compareObjects from './compareObjects.js';
import formatCase from './formatters/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    if (!filepath1 || !filepath2) {
      console.log('Error: missed some file');
      process.exit(1);
    }
    try {
      const file1 = fileParser(filepath1);
      const file2 = fileParser(filepath2);
      const diffTree = compareObjects(file1, file2);
      console.log(formatCase(diffTree, options.format));
    } catch (e) {
      console.error(`Error: ${e.message}`);
      process.exit(1);
    }
  })
  .helpOption('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command');

program.parse(process.argv);
