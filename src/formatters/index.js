import stylish from './stylish.js';
import plain from './plain.js';

const formatCase = (tree, format) => {
  if (format === 'stylish') {
    return stylish(tree);
  }

  if (format === 'plain') {
    return plain(tree);
  }
  throw new Error(`Wrong file format: ${format}. Supported formats: 'stylish', 'plain'`);
};

export default formatCase;
