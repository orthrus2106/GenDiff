import fileParser from './fileParser.js';
import compareObjects from './compareObjects.js';
import formatCase from './formatters/index.js';

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const file1 = fileParser(filePath1);
  const file2 = fileParser(filePath2);
  const diffTree = compareObjects(file1, file2);
  return formatCase(diffTree, format);
};

export default gendiff;
