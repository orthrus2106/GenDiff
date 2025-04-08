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
  .action(() => {
    const { args } = program;

    if (args.length < 2) {
      console.log('Error: need two files');
      process.exitCode = 1;
      return;
    }

    const [filepath1, filepath2] = args;
    const file1 = fileParser(filepath1);
    const file2 = fileParser(filepath2);
    const diffTree = compareObjects(file1, file2);
    const { format } = program.opts();
    console.log(formatCase(diffTree, format));
  })
  .helpOption('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command');

program.parse(process.argv);
