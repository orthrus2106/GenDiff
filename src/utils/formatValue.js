import _ from 'lodash';
import getDepth from './getDepth.js';

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

export default formatValue;
