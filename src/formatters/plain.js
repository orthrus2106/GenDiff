import _ from 'lodash';

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  } if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (object, path = '') => {
  const result = object.map((node) => {
    const {
      key, type, value1, value2, children,
    } = node;
    const fullPath = path ? `${path}.${key}` : key;
    if (type === 'added') {
      return `Property '${fullPath}' was added with value: ${formatValue(value2)}`;
    } if (type === 'updated') {
      return `Property '${fullPath}' was updated. From ${formatValue(value1)} to ${formatValue(value2)}`;
    } if (type === 'removed') {
      return `Property '${fullPath}' was removed`;
    } if (type === 'nested') {
      return plain(children, fullPath);
    }
    return undefined;
  }).flat().filter(Boolean).join('\n');
  return result;
};

export default plain;
