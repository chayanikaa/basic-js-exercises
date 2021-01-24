function createObject(objStr) {
  const objectKeys = objStr.split('.');
  const obj = {};
  let innerObj = obj;
  let i = 0;
  while (i < objectKeys.length) {
    if (i === objectKeys.length - 1) {
      innerObj[objectKeys[i]] = null;
    } else {
      innerObj[objectKeys[i]] = {};
    }
    innerObj = innerObj[objectKeys[i]];
    i++;
  }
  return obj;
}

console.log(JSON.stringify(createObject('a.b.c.d')));