import _ from 'lodash';

const getDepth = (depth, type = 'unchanged') => {
  const space = ' ';
  const base = depth * 4;
  if (type === 'added' || type === 'removed' || type === 'updated') {
    return space.repeat(base - 2);
  }
  return space.repeat(base);
};

const formatValue = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }
  const keys = Object.keys(value);
  const formattedKeys = keys.map((key) => {
    const val = value[key];
    return `${getDepth(depth + 1)}${key}: ${formatValue(val, depth + 1)}`;
  });
  return `{\n${formattedKeys.join('\n')}\n${getDepth(depth)}}`;
};

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
    } if (type === 'updated') {
      return [`${getDepth(depth, type)}- ${key}: ${formatValue(value1, depth)}`, `${getDepth(depth, type)}+ ${key}: ${formatValue(value2, depth)}`].join('\n');
    } if (type === 'nested') {
      return `${getDepth(depth, type)}${key}: ${stylish(children, depth + 1)}`;
    }
    return '';
  });
  return `{\n${preparedObjects.join('\n')}\n${getDepth(depth - 1)}}`;
};

export default stylish;
