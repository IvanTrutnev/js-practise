function flatten(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => {
    return acc.concat(flatten(curr));
  }, []);
}

function flattenObject(object) {
  let flattenObj = {};

  for (const [key, value] of Object.entries(object)) {
    const isObject =
      typeof value === 'object' && value !== null && !Array.isArray(value);

    const flattenedValue = flatten(value);

    if (isObject) {
      Object.assign(flattenObj, flattenedValue);
      // flattenObj = {...flattenObj, ...flattenedValue };
    } else {
      flattenObj[key] = flattenedValue;
    }
  }

  return flattenObj;
}
