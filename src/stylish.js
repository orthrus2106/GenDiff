import getDepth from './utils/getDepth.js';
import formatValue from './utils/formatValue.js';

const stylish = (tree, depth = 1) => {
  const preparedObjects = tree.map((node) => {
    const {
      key, type, value1, value2, children,
    } = node;
    if (type === 'added') {
      return `${getDepth(depth, type)}+ ${key}: ${formatValue(value2, depth)}`;
    } if (type === 'removed') {
      return `${getDepth(depth, type)}- ${key}: ${formatValue(value1, depth)}`;
    } if (type === 'unchanged') {
      return `${getDepth(depth, type)}${key}: ${formatValue(value1, depth)}`;
    } if (type === 'nested') {
      return `${getDepth(depth, type)}${key}: ${stylish(children, depth + 1)}`;
    }
    return '';
  });
  return `{\n${preparedObjects.join('\n')}\n${getDepth(depth - 1)}}`;
};

export default stylish;
