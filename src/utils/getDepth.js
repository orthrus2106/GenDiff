const getDepth = (depth, type = 'unchanged') => {
  const space = ' ';
  const base = depth * 4;
  if (type === 'added' || type === 'removed') {
    return space.repeat(base - 2);
  }
  return space.repeat(base);
};

export default getDepth;
