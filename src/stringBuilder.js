const stringBuilder = (key, value, type, depth) => {
  const space = ' ';
  if (type === 'added') {
    return `${space.repeat(depth * 4 - 2)}+ ${key}: ${value}`;
  } if (type === 'removed') {
    return `${space.repeat(depth * 4 - 2)}- ${key}: ${value}`;
  } if (type === 'unchanged') {
    return `${space.repeat(depth * 4)}${key}: ${value}`;
  }
};

export default stringBuilder;
