import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatCase = (tree, format) => {
  if (format === 'stylish') {
    return stylish(tree);
  }

  if (format === 'plain') {
    return plain(tree);
  }
  if (format === 'json') {
    return json(tree);
  }
  throw new Error(`Wrong file format: ${format}. Supported formats: 'stylish', 'plain', 'json'`);
};

export default formatCase;
