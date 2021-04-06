/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;
/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
/* Node.js helper references. */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;
/** Detect free variable `global` from Node.js. */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global;
/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports;
/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */
const freeProcess = moduleExports && freeGlobal.process;
/** Detect free variable `globalThis` */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis;
/** Detect free variable `self`. */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self;
/** Used as a reference to the global object. */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')();

const getTag = value => {
  if (isNil(value)) return isUndefined(value) ? '[object Undefined]' : '[object Null]';

  return Object.toString.call(value);
};

const isArguments = value => isObjectLike(value) && getTag(value) == '[object Arguments]';

const isArrayLike = value => value != null && typeof value !== 'function' && isLength(value.length);

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

const isBuffer = nativeIsBuffer || (() => false);

const isEmpty = value => {
  const tag = getTag(value);

  if (isNil(value)) return true;

  if (isArrayLike(value) && (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }

  if (tag == '[object Map]' || tag == '[object Set]') return !value.size;

  if (isPrototype(value)) return !Object.keys(value).length;

  for (const key in value) {
    if (Object.hasOwnProperty.call(value, key)) return false;
  }

  return true;
};

const isLength = value => typeof value === 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;

const isNull = value => value === null;

const isObjectLike = value => typeof value === 'object' && value !== null;

const isPrototype = value => {
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

  return value === proto;
};

const isNil = value => value == null;

const isTypedArray = nodeIsTypedArray ? value => nodeIsTypedArray(value) : value => isObjectLike(value) && reTypedTag.test(getTag(value));

const isUndefined = value => value === undefined;

const nodeTypes = (() => {
  try {
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types;
    return typesHelper ? typesHelper : freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {
    console.error(`error`, error);
  }
})();

export const CommonUtils = { isEmpty, isNil, isNull, isUndefined };
