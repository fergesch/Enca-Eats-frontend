export function sortString(a, b) {
  let fa = a.title.toLowerCase(),
    fb = b.title.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
}

export function isObjEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
}

export function findTitleFromAlias(array, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i]['alias'] === value) {
          return array[i]['title'];
      }
  }
  return null;
}

export function toTitleCase(str) {
  let arr = str.split('_');
  let arr2 = [];
  arr.map((n, index) => {
    arr2[index] = n.charAt(0).toUpperCase() + n.substr(1).toLowerCase();
    return true;
  })
  return arr2.join(' ');
}