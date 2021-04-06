const deepEquals = (a, b) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    let arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i,
      length,
      key;

    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) if (!deepEquals(a[i], b[i])) return false;
      return true;
    }

    if (arrA !== arrB) return false;

    let dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA !== dateB) return false;
    if (dateA && dateB) return a.getTime() === b.getTime();

    let regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA !== regexpB) return false;
    if (regexpA && regexpB) return a.toString() === b.toString();

    let keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0; ) {
      key = keys[i];
      if (!deepEquals(a[key], b[key])) return false;
    }

    return true;
  }

  /*eslint no-self-compare: "off"*/
  return a !== a && b !== b;
};

const resolveFieldData = (data, field) => {
  if (data && Object.keys(data).length && field) {
    if (isFunction(field)) {
      return field(data);
    } else if (field.indexOf('.') === -1) {
      return data[field];
    } else {
      let fields = field.split('.');
      let value = data;
      for (var i = 0, len = fields.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[fields[i]];
      }
      return value;
    }
  } else {
    return null;
  }
};

const getJSXElement = (obj, ...params) => (isFunction(obj) ? obj(...params) : obj);

const equals = (obj1, obj2, field) => {
  if (field && obj1 && typeof obj1 === 'object' && obj2 && typeof obj2 === 'object') {
    return resolveFieldData(obj1, field) === resolveFieldData(obj2, field);
  } else return deepEquals(obj1, obj2);
};

const isFunction = obj => !!(obj && obj.constructor && obj.call && obj.apply);

export const DropdownUtils = { equals, getJSXElement };
