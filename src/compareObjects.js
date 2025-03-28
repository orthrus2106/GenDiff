import _ from 'lodash';
import createTree from './utils/createTree.js';

const compareObjects = (obj1, obj2, depth = 1) => {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  const allKeys = firstKeys.concat(secondKeys);
  const uniqueKeys = [...new Set(allKeys)].sort();
  const result = uniqueKeys.reduce((acc, key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      const childrens = compareObjects(obj1[key], obj2[key], depth + 1);
      acc.push(createTree(key, 'nested', null, null, childrens));
      return acc;
    } if (firstKeys.includes(key) && secondKeys.includes(key)) {
      if (obj1[key] === obj2[key]) {
        acc.push(createTree(key, 'unchanged', obj1[key]));
      } else {
        acc.push(createTree(key, 'removed', obj1[key]));
        acc.push(createTree(key, 'added', null, obj2[key]));
      }
    } else if (firstKeys.includes(key) && !secondKeys.includes(key)) {
      acc.push(createTree(key, 'removed', obj1[key]));
    } else if (!firstKeys.includes(key) && secondKeys.includes(key)) {
      acc.push(createTree(key, 'added', null, obj2[key]));
    }
    return acc;
  }, []);
  return result;
};

export default compareObjects;
