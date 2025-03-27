import _ from 'lodash';
import buildIncludedDiff from './buildIncludedDiff.js';
import stringBuilder from './stringBuilder.js';

const compareObjects = (obj1, obj2) => {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  const allKeys = firstKeys.concat(secondKeys);
  const uniqueKeys = [...new Set(allKeys)].sort();
  const result = uniqueKeys.reduce((acc, key) => {
    if (firstKeys.includes(key) && secondKeys.includes(key)) {
      if (obj1[key] === obj2[key]) {
        acc.push(stringBuilder(key, obj1[key], 'unchanged', 1));
      } else {
        acc.push(stringBuilder(key, obj1[key], 'removed', 1));
        acc.push(stringBuilder(key, obj2[key], 'added', 1));
      }
    } else if (firstKeys.includes(key) && !secondKeys.includes(key)) {
      acc.push(stringBuilder(key, obj1[key], 'removed', 1));
    } else if (!firstKeys.includes(key) && secondKeys.includes(key)) {
      acc.push(stringBuilder(key, obj2[key], 'added', 1));
    }
    return acc;
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

export default compareObjects;
