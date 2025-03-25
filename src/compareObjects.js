const compareObjects = (obj1, obj2) => {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  const allKeys = firstKeys.concat(secondKeys);
  const uniqueKeys = [...new Set(allKeys)].sort();
  const result = uniqueKeys.reduce((acc, el) => {
    if (firstKeys.includes(el) && secondKeys.includes(el)) {
      acc +=
        obj1[el] === obj2[el]
          ? `  ${el}: ${obj1[el]}\n`
          : `- ${el}: ${obj1[el]}\n+ ${el}: ${obj2[el]}\n`;
      return acc;
    } else if (firstKeys.includes(el) && !secondKeys.includes(el)) {
      acc += `- ${el}: ${obj1[el]}\n`;
      return acc;
    } else if (!firstKeys.includes(el) && secondKeys.includes(el)) {
      acc += `+ ${el}: ${obj2[el]}\n`;
      return acc;
    }
    return acc;
  }, '');
  return `{\n${result}}`;
};

export default compareObjects;
