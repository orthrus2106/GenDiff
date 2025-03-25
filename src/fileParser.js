import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const fileParser = (file) => {
  try {
    const absolutePath = path.resolve(process.cwd(), file);
    const extOfFile = path.extname(absolutePath);
    const readFile = fs.readFileSync(absolutePath, 'utf-8');
    if (extOfFile === '.json') {
      return JSON.parse(readFile);
    } else if (extOfFile === '.yml' || extOfFile === '.yaml') {
      return yaml.load(readFile);
    } else {
      throw new Error(`Unsupported file format: ${extOfFile}`);
    }
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
};

export default fileParser;
