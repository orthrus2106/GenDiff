const createTree = (key, type, value1 = null, value2 = null, children = null) => ({
  key,
  type,
  value1,
  value2,
  children,
});

export default createTree;
