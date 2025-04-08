import _ from 'lodash';

const createTree = (key, type, value1 = null, value2 = null, children = null) => ({
  key,
  type,
  value1,
  value2,
  children,
});

const compareObjects = (obj1, obj2, depth = 1) => {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  const allKeys = _.union(firstKeys, secondKeys);
  const uniqueKeys = _.sortBy(allKeys);
  const result = uniqueKeys.reduce((acc, key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      const childrens = compareObjects(obj1[key], obj2[key], depth + 1);
      return [...acc, createTree(key, 'nested', null, null, childrens)];
    } if (firstKeys.includes(key) && secondKeys.includes(key)) {
      if (obj1[key] === obj2[key]) {
        return [...acc, createTree(key, 'unchanged', obj1[key])];
      }
      return [...acc, createTree(key, 'updated', obj1[key], obj2[key])];
    } if (firstKeys.includes(key) && !secondKeys.includes(key)) {
      return [...acc, createTree(key, 'removed', obj1[key])];
    } if (!firstKeys.includes(key) && secondKeys.includes(key)) {
      return [...acc, createTree(key, 'added', null, obj2[key])];
    }
    return acc;
  }, []);
  return result;
};

export default compareObjects;
