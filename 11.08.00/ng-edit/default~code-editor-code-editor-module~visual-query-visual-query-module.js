(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~code-editor-code-editor-module~visual-query-visual-query-module"],{

/***/ "/XsO":
/*!*************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_copyArray.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (copyArray);

/***/ }),

/***/ "1MJk":
/*!*******************************!*\
  !*** ../edit/shared/index.ts ***!
  \*******************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService, DnnBridgeService, DropzoneDraggingHelper, webApiEditRoot, EavService, EditRoutingService, webApiEntityRoot, webApiEntityList, EntityService, FileTypeService, GlobalConfigService, LoadIconsService, QueryService, FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "lyDw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiAppFilesAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiAppFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiAppFileCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["AssetsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["DnnBridgeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["DropzoneDraggingHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiEditRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["EavService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["EditRoutingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiEntityRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiEntityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["EntityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["FileTypeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["GlobalConfigService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["LoadIconsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["QueryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["FileTypeConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["ScriptsLoaderService"]; });




/***/ }),

/***/ "1vCq":
/*!***************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_cloneBuffer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "fw2E");

/** Detect free variable `exports`. */

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneBuffer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "cyaT")(module)))

/***/ }),

/***/ "3JE9":
/*!******************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_initCloneArray.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneArray);

/***/ }),

/***/ "9RHM":
/*!************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/cloneDeep.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "B1m9");

/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return Object(_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDeep);

/***/ }),

/***/ "9rp+":
/*!****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_getSymbolsIn.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "gFym");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "cn5Z");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "qd5q");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stubArray.js */ "NUo7");




/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_3__["default"] : function (object) {
  var result = [];

  while (object) {
    Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }

  return result;
};
/* harmony default export */ __webpack_exports__["default"] = (getSymbolsIn);

/***/ }),

/***/ "B1m9":
/*!*************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseClone.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "DHAC");
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ "G66t");
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_assignValue.js */ "KlyH");
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseAssign.js */ "oc8W");
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseAssignIn.js */ "xF/D");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_cloneBuffer.js */ "1vCq");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ "/XsO");
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_copySymbols.js */ "x2O5");
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ "CJWQ");
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_getAllKeys.js */ "BaCy");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "vlDk");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_getTag.js */ "EaxY");
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneArray.js */ "3JE9");
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_initCloneByTag.js */ "kDEu");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ "Ciq1");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "SEb4");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isBuffer.js */ "TPB+");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isMap.js */ "t9KL");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isObject.js */ "gDU4");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isSet.js */ "NN/b");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./keys.js */ "FoV5");





















/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_18__["default"])(value)) {
    return value;
  }

  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value);

  if (isArr) {
    result = Object(_initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value);

    if (!isDeep) {
      return Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, result);
    }
  } else {
    var tag = Object(_getTag_js__WEBPACK_IMPORTED_MODULE_11__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if (Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_16__["default"])(value)) {
      return Object(_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : Object(_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value);

      if (!isDeep) {
        return isFlat ? Object(_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, Object(_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__["default"])(result, value)) : Object(_copySymbols_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value, Object(_baseAssign_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = Object(_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__["default"])(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (Object(_isSet_js__WEBPACK_IMPORTED_MODULE_19__["default"])(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (Object(_isMap_js__WEBPACK_IMPORTED_MODULE_17__["default"])(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__["default"] : isFlat ? keysIn : _keys_js__WEBPACK_IMPORTED_MODULE_20__["default"];
  var props = isArr ? undefined : keysFunc(value);
  Object(_arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClone);

/***/ }),

/***/ "BVxW":
/*!*****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_cloneDataView.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "Vvjf");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDataView);

/***/ }),

/***/ "BqUY":
/*!***************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_cloneSymbol.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "GAvS");

/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (cloneSymbol);

/***/ }),

/***/ "CJWQ":
/*!*****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_copySymbolsIn.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "SWsy");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "9rp+");


/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbolsIn(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbolsIn);

/***/ }),

/***/ "Ciq1":
/*!*******************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_initCloneObject.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "QkPN");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "cn5Z");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "Rmop");



/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneObject(object) {
  return typeof object.constructor == 'function' && !Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object)) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneObject);

/***/ }),

/***/ "E7pG":
/*!***************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_cloneRegExp.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneRegExp);

/***/ }),

/***/ "G66t":
/*!*************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_arrayEach.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayEach);

/***/ }),

/***/ "H6Gy":
/*!*************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseIsSet.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "EaxY");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "gfy7");


/** `Object#toString` result references. */

var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == setTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsSet);

/***/ }),

/***/ "KlyH":
/*!***************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_assignValue.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "gw2c");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "HVAe");


/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objValue, value)) || value === undefined && !(key in object)) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignValue);

/***/ }),

/***/ "MyC+":
/*!*********************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/keysIn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "/ciH");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeysIn.js */ "uau+");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "GIvL");



/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, true) : Object(_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keysIn);

/***/ }),

/***/ "NN/b":
/*!********************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/isSet.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsSet.js */ "H6Gy");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "clBK");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "Af8m");



/* Node.js helper references. */

var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (isSet);

/***/ }),

/***/ "QkPN":
/*!**************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseCreate.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "gDU4");

/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (baseCreate);

/***/ }),

/***/ "RI13":
/*!******************************************************!*\
  !*** ../edit/shared/services/edit-routing.models.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "S36y":
/*!**********************************************************************!*\
  !*** ./src/app/app-administration/services/content-types.service.ts ***!
  \**********************************************************************/
/*! exports provided: webApiTypeRoot, ContentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiTypeRoot", function() { return webApiTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesService", function() { return ContentTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var webApiTypeRoot = 'admin/type/';
var ContentTypesService = /** @class */ (function () {
    function ContentTypesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesService.prototype.retrieveContentType = function (staticName) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'get'), {
            params: { appId: this.context.appId.toString(), contentTypeId: staticName }
        });
    };
    ContentTypesService.prototype.retrieveContentTypes = function (scope) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'list'), {
            params: { appId: this.context.appId.toString(), scope: scope }
        });
    };
    ContentTypesService.prototype.getScopes = function () {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'scopes'), {
            params: { appId: this.context.appId.toString() }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (scopes) {
            var scopeOptions = Object.keys(scopes).map(function (key) { return ({ name: scopes[key], value: key }); });
            return scopeOptions;
        }));
    };
    ContentTypesService.prototype.save = function (contentType) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'save'), contentType, {
            params: { appid: this.context.appId.toString() },
        });
    };
    ContentTypesService.prototype.delete = function (contentType) {
        return this.http.delete(this.apiUrl(webApiTypeRoot + 'delete'), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        });
    };
    ContentTypesService.prototype.import = function (files) {
        var e_1, _a;
        var formData = new FormData();
        try {
            for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                formData.append('File', file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.http.post(this.apiUrl(webApiTypeRoot + 'import'), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ContentTypesService.prototype.createGhost = function (sourceStaticName) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'addghost'), null, {
            params: { appid: this.context.appId.toString(), sourceStaticName: sourceStaticName },
        });
    };
    ContentTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesService);
    return ContentTypesService;
}());



/***/ }),

/***/ "SWsy":
/*!**************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_copyObject.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue.js */ "KlyH");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "gw2c");


/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    } else {
      Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    }
  }

  return object;
}

/* harmony default export */ __webpack_exports__["default"] = (copyObject);

/***/ }),

/***/ "Vvjf":
/*!********************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "mY74");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneArrayBuffer);

/***/ }),

/***/ "ZSpj":
/*!*******************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_cloneTypedArray.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "Vvjf");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneTypedArray);

/***/ }),

/***/ "cn5Z":
/*!****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_getPrototype.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "CrBj");

/** Built-in value references. */

var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);
/* harmony default export */ __webpack_exports__["default"] = (getPrototype);

/***/ }),

/***/ "geKs":
/*!************************!*\
  !*** ../edit/index.ts ***!
  \************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService, DnnBridgeService, DropzoneDraggingHelper, webApiEditRoot, EavService, EditRoutingService, webApiEntityRoot, webApiEntityList, EntityService, FileTypeService, GlobalConfigService, LoadIconsService, QueryService, FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "1MJk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiAppFilesAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiAppFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiAppFileCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["AssetsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["DnnBridgeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["DropzoneDraggingHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiEditRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["EavService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["EditRoutingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiEntityRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiEntityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["EntityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["FileTypeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["GlobalConfigService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["LoadIconsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["QueryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["FileTypeConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["ScriptsLoaderService"]; });




/***/ }),

/***/ "gw2c":
/*!*******************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseAssignValue.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "lv0l");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignValue);

/***/ }),

/***/ "kDEu":
/*!******************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_initCloneByTag.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "Vvjf");
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ "BVxW");
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneRegExp.js */ "E7pG");
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneSymbol.js */ "BqUY");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "ZSpj");





/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return Object(_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return Object(_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return Object(_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return Object(_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneByTag);

/***/ }),

/***/ "kli+":
/*!****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_nativeKeysIn.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (nativeKeysIn);

/***/ }),

/***/ "lv0l":
/*!******************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_defineProperty.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "y7Du");


var defineProperty = function () {
  try {
    var func = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/* harmony default export */ __webpack_exports__["default"] = (defineProperty);

/***/ }),

/***/ "lyDw":
/*!****************************************!*\
  !*** ../edit/shared/services/index.ts ***!
  \****************************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService, DnnBridgeService, DropzoneDraggingHelper, webApiEditRoot, EavService, EditRoutingService, webApiEntityRoot, webApiEntityList, EntityService, FileTypeService, GlobalConfigService, LoadIconsService, QueryService, FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.service */ "6fnQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["webApiAppFilesAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["webApiAppFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["webApiAppFileCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["AssetsService"]; });

/* harmony import */ var _dnn_bridge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnn-bridge.service */ "iKpp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return _dnn_bridge_service__WEBPACK_IMPORTED_MODULE_1__["DnnBridgeService"]; });

/* harmony import */ var _dropzone_dragging_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone-dragging.helper */ "kfUh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return _dropzone_dragging_helper__WEBPACK_IMPORTED_MODULE_2__["DropzoneDraggingHelper"]; });

/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eav.service */ "JXuk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return _eav_service__WEBPACK_IMPORTED_MODULE_3__["webApiEditRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return _eav_service__WEBPACK_IMPORTED_MODULE_3__["EavService"]; });

/* harmony import */ var _edit_routing_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-routing.models */ "RI13");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.service */ "0adC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return _edit_routing_service__WEBPACK_IMPORTED_MODULE_5__["EditRoutingService"]; });

/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity.service */ "b67o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return _entity_service__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return _entity_service__WEBPACK_IMPORTED_MODULE_6__["webApiEntityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _entity_service__WEBPACK_IMPORTED_MODULE_6__["EntityService"]; });

/* harmony import */ var _file_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-type.service */ "IMfk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return _file_type_service__WEBPACK_IMPORTED_MODULE_7__["FileTypeService"]; });

/* harmony import */ var _global_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global-configuration.service */ "2FQU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return _global_configuration_service__WEBPACK_IMPORTED_MODULE_8__["GlobalConfigService"]; });

/* harmony import */ var _load_icons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./load-icons.service */ "39Ct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return _load_icons_service__WEBPACK_IMPORTED_MODULE_9__["LoadIconsService"]; });

/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query.service */ "gatd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _query_service__WEBPACK_IMPORTED_MODULE_10__["QueryService"]; });

/* harmony import */ var _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts-loader.service */ "Scw0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__["FileTypeConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__["ScriptsLoaderService"]; });















/***/ }),

/***/ "oc8W":
/*!**************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseAssign.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "SWsy");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "FoV5");


/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssign(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssign);

/***/ }),

/***/ "t9KL":
/*!********************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/isMap.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMap.js */ "w+bM");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "clBK");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "Af8m");



/* Node.js helper references. */

var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (isMap);

/***/ }),

/***/ "uau+":
/*!**************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseKeysIn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "gDU4");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPrototype.js */ "Rmop");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "kli+");



/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
  }

  var isProto = Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeysIn);

/***/ }),

/***/ "vlDk":
/*!****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_getAllKeysIn.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "lnqP");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "9rp+");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keysIn.js */ "MyC+");



/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeysIn(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeysIn);

/***/ }),

/***/ "w+bM":
/*!*************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseIsMap.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "EaxY");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "gfy7");


/** `Object#toString` result references. */

var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == mapTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsMap);

/***/ }),

/***/ "x2O5":
/*!***************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_copySymbols.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "SWsy");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "qd5q");


/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbols(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbols);

/***/ }),

/***/ "xF/D":
/*!****************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/lodash-es/_baseAssignIn.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "SWsy");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "MyC+");


/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssignIn(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignIn);

/***/ })

}]);
//# sourceMappingURL=default~code-editor-code-editor-module~visual-query-visual-query-module.js.map