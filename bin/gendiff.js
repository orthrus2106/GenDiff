#!/usr/bin/env node

import getDiff from '../src/index.js';
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command');

program.parse(process.argv);
getDiff();
