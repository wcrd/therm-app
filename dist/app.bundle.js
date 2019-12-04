/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/readOnlyError.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/readOnlyError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*jQuery table row dragging maintain width*/\r\n.ui-sortable-helper {\r\n    display: table;\r\n}\r\n/* Toggle icon visibility on hover */\r\ntr:hover i.row-ops {\r\n    display: block !important;\r\n}\r\n.border-3 {\r\n    border-width:2px !important;\r\n}\r\n.results {\r\n    margin: 0 !important;\r\n}\r\ntd button {\r\n    height: 100% !important;\r\n}\r\n.text-large {\r\n    font-size: 100%;\r\n}\r\n#input-layers > thead > tr > th { border-bottom: none; }\r\n#history > tbody > tr .text-danger:hover {\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\ninput:disabled.form-control-plaintext:focus {\r\n        outline: none;\r\n}\r\n.cavity {\r\n    background-color: #f2fcff;\r\n}\r\ndiv.constrain {\r\n    height: 250px;\r\n    overflow: auto;\r\n}\r\n.table-striped>tbody>tr:nth-child(odd)>td, \r\n.table-striped>tbody>tr:nth-child(odd)>th {\r\n    background-color: #f5fbfc;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/app.css */ "./src/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_UI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/UI.js */ "./src/js/UI.js");
/* harmony import */ var _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Helpers.js */ "./src/js/Helpers.js");
/* harmony import */ var _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Therm.js */ "./src/js/Therm.js");
/* harmony import */ var _js_Construction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/Construction.js */ "./src/js/Construction.js");
/* harmony import */ var _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/Storage.js */ "./src/js/Storage.js");



// bundle items for webpack
 // Import components





 // register for dev only

window.UI = _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"];
window.Therm = _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"];
window.Construction = _js_Construction_js__WEBPACK_IMPORTED_MODULE_7__["default"];
window.Storage = _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"];
window.Helpers = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"]; // EVENT: Modify table row (add/delete)

document.querySelector('#input-layers').addEventListener('click', function (e) {
  _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].modifyRowController(e.target);
}); // EVENT: add air cavity row

document.querySelector('#add-air-cavity').addEventListener('click', function (e) {
  var tableBody = document.querySelector('#input-layers').querySelector('tbody');
  _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].addToInputLayers(tableBody, "cavity");
}); // EVENT: Calculate
// custom event handle

var event_calculate = new Event('calculate');
document.addEventListener('calculate', function (e) {
  console.log("Calculate!"); // get table body ref

  var table = document.querySelector('#input-layers').querySelector('tbody'); // Check for data

  var hasData = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].doesTableHaveFormData(table);

  if (!hasData) {
    alert('No data');
    return;
  } else {
    // Remove empty rows
    _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].removeEmptyTableRows(table); // data validation

    var hasValidInputData = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].validateTableFormNumberInput(table);
    var isComplete = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].validateTableFormComplete(table);
    var airLayerBounded = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].isAirLayerBounded(table);

    if (!isComplete) {
      alert('Data missing in row. Update or delete incomplete rows.');
      return;
    } else if (!hasValidInputData) {
      alert('> d and k values must be numbers. Please check input.\n> Air layer thickness must be between 0 - 300mm');
      return;
    } else if (!airLayerBounded) {
      alert('Air layer must be between two material layers');
      return;
    } else {
      // Get data [0] material, [1] thickness, [2] k value
      var layerData = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].extractLayerInfoFromTable(table); // create Construction

      var construction = new _js_Construction_js__WEBPACK_IMPORTED_MODULE_7__["default"](layerData[0], layerData[1], layerData[2]);
      console.log(construction); // Clear existing charts

      _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].clearCharts(); // Draw construction

      var chart = _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].drawLayers(construction); // Get temp plot options from construction properties table

      var plotTemps = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].getPlotTemps(); // Draw temperature gradients 

      _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].drawTemperatures.apply(_js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"], [construction, chart].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(plotTemps))); // Display results

      _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayConstructionResults(construction); // Record in history

      _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].addConstruction(construction); // Update History Table

      _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateHistory();
    }
  }
});
document.querySelector('#calculate').addEventListener('click', function (e) {
  document.dispatchEvent(event_calculate);
}); // EVENT: Load from History

document.querySelector('#history').addEventListener('click', function (e) {
  // if click is in input field or delete button, do nothing
  if (e.target.tagName === 'INPUT' || e.target.innerHTML === 'delete') {
    return;
  } // get parent node (table row)


  var row = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].getClosest(e.target, 'tr'); // check if element is table row not column (i.e. not header or other element)

  if (row.parentElement.tagName === "THEAD") {
    return;
  } // get construction id value


  var id = row.querySelector('#c_id').innerHTML; // retrieve construction from storage

  var construction = _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].getConstructionByID(id); // populate input table and plot

  if (construction) {
    _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateInputTableFromConstruction(construction);
    document.dispatchEvent(event_calculate);
    $(makeSortable());
  }
}); // EVENT: DEV TESTING

document.querySelector('#dev-test').addEventListener('click', function () {
  _dev_helpers.test_data();
}); // EVENT: Reset

document.querySelector('#reset').addEventListener('click', function () {
  // remove rows from input table
  var inputTable = document.querySelector('#input-layers');
  var tableBody = _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].clearTableBody(inputTable);
  $(makeSortable()); // redraw input table with four rows

  for (var i = 0; i < 4; i++) {
    _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].addToInputLayers(tableBody);
  } // reset canvas


  _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].clearCharts(); // draw default image

  _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].defaultCanvasImage(); // reset results window

  _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].clearConstructionResults();
}); // EVENT: Clear History

document.querySelector('#clear-history').addEventListener('click', function () {
  // Clear storage
  _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].clearConstructions(); // Reload table

  _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateHistory();
}); // EVENT: On load and resize

window.addEventListener('load', function () {
  // Load canvas and size it to div
  var canvas = document.querySelector('#canvas-construction');
  _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].fitToParentContainer(canvas); // draw default image

  _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].defaultCanvasImage(); // Populate History

  _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateHistory();
});
window.addEventListener('resize', function () {
  // Clear canvas
  _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].clearCharts(); // Resize canvas

  var canvas = document.querySelector('#canvas-construction');
  _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].fitToParentContainer(canvas); // draw default image

  _js_Therm_js__WEBPACK_IMPORTED_MODULE_6__["default"].defaultCanvasImage();
}); // EVENT: Click R_surface enable toggle

document.querySelector('#customSwitch1').addEventListener('click', function () {
  // recalculate
  // replot
  document.dispatchEvent(event_calculate); // change column style based on toggle position

  var toggle = document.querySelector('#customSwitch1'); // get column

  var col = document.querySelector('#surface-properties'); // get all inputs

  var inputs = col.querySelectorAll('input'); // reformat

  inputs.forEach(function (input) {
    input.readOnly = !toggle.checked;
    input.classList.toggle('text-body');
  });
}); // EVENT: t_o t_i refresh

document.querySelector('#temp-refresh').addEventListener('click', function () {
  // recalculate
  // replot
  document.dispatchEvent(event_calculate);
}); // EVENT: add name to history (click out and enter press)

document.querySelector('#history').addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    handleHistoryName(e);
  }
});
document.querySelector('#history').addEventListener('click', function (e) {
  // if the user clicks into an input field
  if (e.target.tagName == "INPUT") {
    // create a one time event listener to tell when they click out of that input field
    e.target.addEventListener('blur', function () {
      // write name to storage
      handleHistoryName(e);
    }, {
      once: true
    });
  }
});

function handleHistoryName(e) {
  // get name
  var name = e.target.value; // get construction id

  var row = e.target.parentElement.parentElement;
  var id = row.querySelector('#c_id').innerHTML; // save name

  _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].updateConstructionName(id, name);
} // EVENT History delete row


document.querySelector('#history').addEventListener('click', function (e) {
  // only delete if delete button clicked
  if (e.target.innerHTML === 'delete') {
    // get parent node (table row)
    var row = _js_Helpers_js__WEBPACK_IMPORTED_MODULE_5__["default"].getClosest(e.target, 'tr'); // get construction id value

    var id = row.querySelector('#c_id').innerHTML; // delete from Storage

    _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteConstruction(id); // repopulate table

    _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateHistory();
  }
}); // EVENT: Expand history table

document.querySelector('#expand-history').addEventListener('click', function () {
  // toggle History div element height property
  document.querySelector('#history-div').classList.toggle('constrain'); // toggle button text

  var btn = document.querySelector('#expand-history');
  var btnText = btn.querySelector('span');
  var btnIcon = btn.querySelector('i');

  if (btnText.textContent === "Expand Table") {
    btnText.textContent = "Collapse Table";
    btnIcon.classList.remove('fa-angle-down');
    btnIcon.classList.add('fa-angle-up');
  } else {
    btnText.textContent = "Expand Table";
    btnIcon.classList.remove('fa-angle-up');
    btnIcon.classList.add('fa-angle-down');
  }
}); // EVENT Export History Data

document.querySelector('#export-history').addEventListener('click', function () {
  _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].exportConstructions();
}); // EVENT Import history data

document.querySelector('#import-history').addEventListener('change', function (e) {
  // flash alert that this will erase current hisory
  var response = confirm("This will erase current history");

  if (response) {
    // Clear storage
    _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].clearConstructions(); // handle file and load into storage

    _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].importConstructionsFromFile(e.target.files);
  }
}); // HELPERS

var _dev_helpers =
/*#__PURE__*/
function () {
  function _dev_helpers() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _dev_helpers);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_dev_helpers, null, [{
    key: "test_data",
    value: function test_data() {
      // dummy data
      var data = new _js_Construction_js__WEBPACK_IMPORTED_MODULE_7__["default"](['steel', 'wood', 'textile'], [6, 3, 8], [1.1, 2.5, 1.8]); // draw

      _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateInputTableFromConstruction(data);
      document.dispatchEvent(event_calculate); // add name

      _js_Storage_js__WEBPACK_IMPORTED_MODULE_8__["default"].updateConstructionName(data._idToken, "::example construction::"); // reload storage

      _js_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"].populateHistory(); // make sortable

      makeSortable();
    }
  }]);

  return _dev_helpers;
}();

function makeSortable() {
  $(".sortable").sortable();
}

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/js/Construction.js":
/*!********************************!*\
  !*** ./src/js/Construction.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Construction; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



// Construction Class: model to represent the 'construction' built from inputs
var Construction =
/*#__PURE__*/
function () {
  function Construction(materials, thicknesses, k_vals) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Construction);

    this.materials = materials;
    this.thicknesses = thicknesses.map(Number);
    this.k_vals = k_vals;
    this.r_vals = Construction.layerRValues(thicknesses, k_vals);
    this.r_value = Construction.calcRValue(thicknesses, k_vals);
    this.thickness = thicknesses.reduce(function (acc, val) {
      return acc + Number(val);
    }, 0);
    this._idToken = Construction.makeIDToken(materials, thicknesses, k_vals);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Construction, [{
    key: "name",
    set: function set(n) {
      this._name = n;
    },
    get: function get() {
      return this._name;
    }
  }, {
    key: "u_value",
    get: function get() {
      return 1 / this.r_value;
    }
  }], [{
    key: "u_value",
    value: function u_value(construction) {
      return 1 / construction.r_value;
    }
  }, {
    key: "calcRValue",
    value: function calcRValue(thicknesses, k_vals) {
      var r_val = 0;
      thicknesses.forEach(function (thickness, idx) {
        // if layer is air layer, calculate airlayerR  (air layer is assigned k_val of "" when created)
        if (k_vals[idx] === "") {
          r_val += Construction.airlayerResistance(thickness);
        } else {
          r_val += 0.001 * thickness / k_vals[idx]; //console.log(`d: ${thickness}, k: ${k_vals[idx]}`);
        }
      });
      return r_val;
    } // this doen't work in constructor, cant seem to access this.r_vals

  }, {
    key: "totalRValue",
    value: function totalRValue(r_vals) {
      return r_vals.reduce(function (acc, curr) {
        acc + curr;
      }, 0);
    }
  }, {
    key: "layerRValues",
    value: function layerRValues(thicknesses, k_vals) {
      var r_vals = [];
      thicknesses.forEach(function (thickness, idx) {
        // if layer is air layer, calculate airlayerR (air layer is assigned k_val of "" when created)
        if (k_vals[idx] === "") {
          r_vals.push(Construction.airlayerResistance(thickness));
        } else {
          // else push r_val
          r_vals.push(0.001 * thickness / k_vals[idx]);
        }
      });
      return r_vals;
    }
  }, {
    key: "makeIDToken",
    value: function makeIDToken(materials, thicknesses, k_vals) {
      var holding = [];
      materials.forEach(function (material, idx) {
        holding.push({
          "m": material,
          "d": [thicknesses[idx], k_vals[idx]]
        });
      }); // sort

      holding.sort(function (a, b) {
        var nameA = a.m.toUpperCase(); // ignore upper and lowercase

        var nameB = b.m.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        } // names must be equal


        return 0;
      }); // join

      var output = [];
      holding.forEach(function (layer) {
        output.push([layer.m, layer.d.join("_")].join("_"));
      });
      return output.join("-");
    } // Calculate air layer thermal resistance (horizontal) for unventilated layer as per BS-ISO6946
    // d needs to be validated b/w 0->300 before being passed to this function.

  }, {
    key: "airlayerResistance",
    value: function airlayerResistance(d) {
      var thickness = [0, 5, 7, 10, 15, 25, 300.1],
          r = [0, 0.11, 0.13, 0.15, 0.17, 0.18, 0.18];

      var interpolateR = function interpolateR(d) {
        // find d position upper limit in thickness array
        var idx = thickness.findIndex(function (item) {
          return item > d;
        }); // interpolate

        return r[idx - 1] + (r[idx] - r[idx - 1]) * ((d - thickness[idx - 1]) / (thickness[idx] - thickness[idx - 1]));
      };

      return interpolateR(d);
    }
  }]);

  return Construction;
}();



/***/ }),

/***/ "./src/js/Helpers.js":
/*!***************************!*\
  !*** ./src/js/Helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helpers; });
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Helpers);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Helpers, null, [{
    key: "doesTableHaveFormData",
    value: function doesTableHaveFormData(table) {
      // get table rows
      var table_rows = table.rows; // loop through rows (backward just because)

      for (var i = table_rows.length - 1; i >= 0; i--) {
        // get all cells for row
        var cells = table_rows[i].cells; // if material [1], thickness [2], or k [3] have value, return success

        if (cells[1].children[0].value != '' || cells[2].children[0].value != '' || cells[3].children[0].value != '') {
          return true;
        }
      } // if no data found


      return false;
    } // check all rows have three input cells filled

  }, {
    key: "validateTableFormComplete",
    value: function validateTableFormComplete(table) {
      // get table rows
      var table_rows = table.rows; // loop through rows bottom to top (b/c we will be removing as we go)

      for (var i = table_rows.length - 1; i >= 0; i--) {
        // get all cells for row
        var cells = table_rows[i].cells; // if layer is air layer, skip k value validation

        if (table_rows[i].classList.contains("cavity")) {
          // if material [1], thickness [2] are empty, return 'not-valid' row.
          if (cells[1].children[0].value === '' || cells[2].children[0].value === '') {
            return false;
          }
        } else {
          // if material [1], thickness [2], or k [3] are empty, return 'not-valid' row.
          if (cells[1].children[0].value === '' || cells[2].children[0].value === '' || cells[3].children[0].value === '') {
            return false;
          }
        }
      }

      return true;
    } // check data in input rows is the right format

  }, {
    key: "validateTableFormNumberInput",
    value: function validateTableFormNumberInput(table) {
      // get table rows
      var table_rows = table.rows; // loop through rows (backward just because)

      for (var i = table_rows.length - 1; i >= 0; i--) {
        // get all cells for row
        var cells = table_rows[i].cells; // if layer is air layer, skip k value validation

        if (table_rows[i].classList.contains("cavity")) {
          // if thickness [2]cannot be cast to number, fail
          if (!Number(cells[2].children[0].value)) {
            return false;
          } else if (cells[2].children[0].value < 0 || cells[2].children[0].value > 300) {
            // too thick for air cavity - other calculation methods are required
            // beyond the scope of this site.
            return false;
          }
        } else {
          // if thickness [2], and k [3] cannot be cast to number, fail
          if (!Number(cells[2].children[0].value) || !Number(cells[3].children[0].value)) {
            return false;
          }
        }
      }

      return true;
    } // check that air layer rows are bounded by material rows

  }, {
    key: "isAirLayerBounded",
    value: function isAirLayerBounded(table) {
      // get table rows
      var table_rows = table.rows; // loop through and check for air layers at edges or adjacent

      var bounded = true;

      for (var idx = 0; idx < table_rows.length; idx++) {
        var row = table_rows[idx]; // if last or first table row is air layer, then it is not bounded

        if (idx === 0 && row.classList.contains("cavity")) {
          bounded = false;
        } else if (idx === table_rows.length - 1 && row.classList.contains("cavity")) {
          bounded = false;
        } else if (row.classList.contains("cavity")) {
          // if air cavity (not start or end), if next row is cavity, not bounded
          if (table_rows[idx + 1].classList.contains("cavity")) {
            bounded = false;
          }
        }
      }

      return bounded;
    }
  }, {
    key: "removeEmptyTableRows",
    value: function removeEmptyTableRows(table) {
      // get table rows
      var table_rows = table.rows; // loop through rows bottom to top (b/c we will be removing as we go)

      for (var i = table_rows.length - 1; i >= 0; i--) {
        // get all cells for row
        var cells = table_rows[i].cells; // if material [1], thickness [2], and k [3] are empty, delete row.

        if (cells[1].children[0].value === '' && cells[2].children[0].value === '' && cells[3].children[0].value === '') {
          UI.deleteRow(table_rows[i]);
        }
      }
    }
  }, {
    key: "extractLayerInfoFromTable",
    value: function extractLayerInfoFromTable(table) {
      // get table rows
      var table_rows = table.rows; // Initialise output arrays

      var materials = [];
      var thicknesses = [];
      var k_vals = []; // Loop through rows and save data

      for (var i = 0; i < table_rows.length; i++) {
        materials.push(table_rows[i].cells[1].children[0].value);
        thicknesses.push(table_rows[i].cells[2].children[0].value);
        k_vals.push(table_rows[i].cells[3].children[0].value);
      }

      ;
      return [materials, thicknesses, k_vals];
    }
  }, {
    key: "fitToParentContainer",
    value: function fitToParentContainer(el) {
      var parent = el.parentNode;
      el.height = parent.clientHeight;
      el.width = parent.clientWidth;
    }
  }, {
    key: "getPlotTemps",
    value: function getPlotTemps() {
      var output = [];
      output.push(Number(document.querySelector("#temp-outside").value));
      output.push(Number(document.querySelector("#temp-inside").value));
      return output;
    }
  }, {
    key: "formatNumberLength",
    value: function formatNumberLength(number, length) {
      // if number is blank string, return early
      if (number === "") {
        return "";
      } // get integer part


      var integer = number.toFixed(0); // if 0, then number is decimal and we want fixed length-1

      if (integer === "0") {
        return number.toFixed(length - 1);
      } else {
        // can just use to precision
        return number.toPrecision(length);
      }
    }
  }, {
    key: "precise",
    value: function precise(x) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      return Number.parseFloat(x).toPrecision(p);
    }
  }, {
    key: "fixed",
    value: function fixed(x) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return Number.parseFloat(x).toFixed(p);
    } // jQuery method in Vanilla JS

  }, {
    key: "getClosest",
    value: function getClosest(elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;

          while ((_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0___default()("i"), --i) >= 0 && matches.item(i) !== this) {}

          return i > -1;
        };
      } // Get closest match


      for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
      }

      return null;
    }
  }]);

  return Helpers;
}();



/***/ }),

/***/ "./src/js/Storage.js":
/*!***************************!*\
  !*** ./src/js/Storage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Construction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Construction.js */ "./src/js/Construction.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI.js */ "./src/js/UI.js");





 // Storage Class: Control browser storage

var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Storage);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Storage, null, [{
    key: "getConstructions",
    // Load Storage
    value: function getConstructions() {
      var constructions;

      if (localStorage.getItem('constructions') === null) {
        constructions = [];
      } else {
        constructions = JSON.parse(localStorage.getItem('constructions'));
      }

      return constructions;
    } // get construction by id

  }, {
    key: "getConstructionByID",
    value: function getConstructionByID(id) {
      var constructions = Storage.getConstructions();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = constructions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var construction = _step.value;

          if (construction._idToken == id) {
            return construction;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      console.log('Construction not found in local storage. Abort.');
      return false;
    } // Update item in storage

  }, {
    key: "updateConstructionName",
    value: function updateConstructionName(id, name) {
      // get constructions from storage
      var constructions = Storage.getConstructions(); // find construction to update

      constructions.forEach(function (entry, idx) {
        if (entry._idToken === id) {
          // update name parameter
          constructions[idx].name = name;
        }
      }); // save back to storage

      localStorage.setItem('constructions', JSON.stringify(constructions));
    } // Add to storage

  }, {
    key: "addConstruction",
    value: function addConstruction(construction) {
      // get constructions from storage
      var constructions = Storage.getConstructions(); // check if exists

      var newCons = constructions.every(function (entry) {
        if (entry._idToken === construction._idToken) {
          console.log('duplicate! save aborted');
          return false;
        }

        return true;
      });

      if (!newCons) {
        return;
      } // add construction


      constructions.push(construction); // save back to storage

      localStorage.setItem('constructions', JSON.stringify(constructions));
    } // Delete from Storage

  }, {
    key: "deleteConstruction",
    value: function deleteConstruction(id) {
      // get constructions from storage
      var constructions = Storage.getConstructions(); // find construction to delete

      for (var i = 0; i < constructions.length; i++) {
        if (constructions[i]._idToken === id) {
          // delete
          constructions.splice(i, 1);
          break;
        }
      } // save back to storage


      localStorage.setItem('constructions', JSON.stringify(constructions));
    } // Clear storage

  }, {
    key: "clearConstructions",
    value: function clearConstructions() {
      localStorage.removeItem('constructions');
    } // convert storage into csv file

  }, {
    key: "JSONtoCSV",
    value: function JSONtoCSV() {
      // get constructions
      var constructions = Storage.getConstructions(); // csv headers

      var csvHeaders = ['id', 'name', 'material', 'thickness', 'k-val', 'r-val', 'total-r']; // make csv content

      var csvBody = [];
      constructions.forEach(function (c, c_idx) {
        // create new row per material layer
        c.materials.forEach(function (m, idx) {
          csvBody.push([c_idx, c.name, m, c.thicknesses[idx], c.k_vals[idx], c.r_vals[idx], c.r_value]);
        });
      }); // insert csv headers at start of data

      csvBody.unshift(csvHeaders); // join into csv string

      return csvBody.join("\n");
    } // convert CSV to Constructions

  }, {
    key: "CSVtoConstruction",
    value: function CSVtoConstruction(csv_data) {
      // convert to list per row
      var data = csv_data.split('\n'); // remove header

      data.shift(); // results containers

      var materials = [],
          thicknesses = [],
          k_vals = []; // current construction id (for processing layers)

      var c_id, name; // loop through each row, extract info for a construction and create

      data.forEach(function (row, idx) {
        // split row into element
        var layer = row.split(','); // validate number of columns [id, name, mat, d, k]

        if (layer.length < 5) {
          return;
        } // set c_id, name on first iteration


        if (idx == 0) {
          c_id = layer[0];
          name = layer[1];
        } // if construction id does not == previous, save existing construction, reset and start new construction


        if (layer[0] != c_id) {
          // create & save construction
          saveConstruction(materials, thicknesses, k_vals, name); // reset variables

          materials = [];
          thicknesses = [];
          k_vals = []; // set new c_id, name

          c_id = layer[0];
          name = layer[1];
        } // process layer


        materials.push(layer[2]);
        thicknesses.push(layer[3]);
        k_vals.push(layer[4]);
      }); // create final construction

      saveConstruction(materials, thicknesses, k_vals, name); // Helper

      function saveConstruction(m, t, k, n) {
        var c = new _Construction_js__WEBPACK_IMPORTED_MODULE_4__["default"](m, t, k); // save construction

        Storage.addConstruction(c);
        console.log(n);
        Storage.updateConstructionName(c._idToken, n);
      }
    } // export to csv

  }, {
    key: "exportConstructions",
    value: function exportConstructions() {
      // convert stored constructions to csv-like format
      var csv = Storage.JSONtoCSV(); // set params via a 'hidden' element

      var hiddenElement = document.createElement('a');
      hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'constructions.csv';
      hiddenElement.click();
    } // import from csv

  }, {
    key: "importConstructionsFromFile",
    value: function () {
      var _importConstructionsFromFile = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fileList) {
        var file, reader;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // upload button is restricted to one-file.
                // get file element
                file = fileList[0]; // read file element

                reader = new FileReader();
                reader.readAsText(file); // event on read (b/c async we just can't call this sequentially)

                reader.onload = function () {
                  Storage.CSVtoConstruction(reader.result);
                };

                reader.onloadend = function () {
                  _UI_js__WEBPACK_IMPORTED_MODULE_5__["default"].populateHistory();
                };

                reader.onerror = function () {
                  alert("read failed. check console for details");
                  console.log(reader.error);
                };

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function importConstructionsFromFile(_x) {
        return _importConstructionsFromFile.apply(this, arguments);
      }

      return importConstructionsFromFile;
    }()
  }]);

  return Storage;
}();



/***/ }),

/***/ "./src/js/Therm.js":
/*!*************************!*\
  !*** ./src/js/Therm.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Therm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/js/UI.js");
/* harmony import */ var _Helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Helpers.js */ "./src/js/Helpers.js");



 // Therm Class: Calculation and rendering methods

var Therm =
/*#__PURE__*/
function () {
  function Therm() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Therm);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Therm, null, [{
    key: "drawLayers",
    value: function drawLayers(construction) {
      // process data (add air layers, convert to Chart.js format)
      var dataset = Therm.get_dataset(construction); // get canvas

      var canvas = document.querySelector('#canvas-construction'); // set context

      var ctx = canvas.getContext("2d"); // draw

      var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ["construction"],
          datasets: dataset //borderColor: 'rgb(255, 99, 132)'

        },
        options: {
          legend: {
            display: true,
            onClick: null,
            labels: {
              filter: function filter(item, chart) {
                var state = true; // check if cavity

                if (item.text === "== unventilated cavity ==") {
                  // Logic to remove air cavity label if another exists
                  // get legend items
                  var labels = chart['datasets']; // loop through items

                  for (var i = 0; i < labels.length - 1; i++) {
                    //get first item that is cavity, then check if it is same index as current legend item
                    if (labels[i].label === "== unventilated cavity ==") {
                      // if it is same item, keep item and break the filter loop
                      if (i === item.datasetIndex) {
                        break;
                      } else {
                        // if it is not same item, then this is a duplicate lengend entry and should be removed
                        state = false;
                        break;
                      }
                    }
                  } //for(let i =)

                } else {
                  // Logic to remove a particular legend item goes here
                  var items = ['air (ext.)', 'air (int.)'];

                  if (items.some(function (el) {
                    return item.text.includes(el);
                  })) {
                    state = false;
                  }
                }

                return state;
              }
            }
          },
          scales: {
            yAxes: [{
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              position: 'right'
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'thickness'
              },
              ticks: {
                stepSize: 1.0,
                maxRotation: 0,
                callback: function callback(value, index, values) {
                  var n = values.length;

                  if (n <= 25) {
                    return value;
                  } else if (n > 25 && n <= 50) {
                    if (index % 2 == 0) {
                      return value;
                    }
                  } else if (n > 50 && n <= 75) {
                    if (index % 2 == 0) {
                      return value;
                    }
                  } else if (n > 75 && n <= 100) {
                    if (index % 3 == 0) {
                      return value;
                    }
                  } else if (n > 100 && n <= 125) {
                    if (index % 5 == 0) {
                      return value;
                    }
                  } else {
                    if (index % 10 == 0) {
                      return value;
                    }
                  }
                }
              },
              afterBuildTicks: function afterBuildTicks(axis, ticks) {
                // filter ticks so that only ticks around construction are shown
                return ticks.filter(function (val, idx, arr) {
                  // get construction thickness
                  var limit = construction.thickness;
                  return val >= 0 && val <= limit;
                });
              }
            }]
          },
          tooltips: {
            mode: 'nearest',
            callbacks: {
              title: function title(tooltipItem, data) {
                var label = tooltipItem[0].label;

                if (label === "construction") {
                  // get title of data
                  var _label = data.datasets[tooltipItem[0].datasetIndex].label; // if surface resistance or air boundary, just show name

                  if (Therm.supportingLayerNames().includes(_label)) {
                    return _label;
                  } else {
                    return "construction";
                  }
                } else {
                  return "temperature";
                }
              },
              label: function label(tooltipItem, data) {
                // if construction show thickness with mm
                if (tooltipItem.label === "construction") {
                  var label = data.datasets[tooltipItem.datasetIndex].label; // if surface resistance show nothing

                  if (Therm.supportingLayerNames("surface").includes(label)) {
                    return; //if air boundary, show temperature
                  } else if (Therm.supportingLayerNames("air").includes(label)) {
                    if (tooltipItem.value < 0) {
                      // temp is always first dataset
                      // left side air layer, get left side temp value
                      return "".concat(data.datasets[0].data[0].y, " ").concat(String.fromCharCode(176), "C");
                    } else {
                      // right side air layer, get right side temp value
                      return "".concat(data.datasets[0].data[data.datasets[0].data.length - 1].y, " ").concat(String.fromCharCode(176), "C");
                    }
                  } else {
                    // material. Show thickness AND layer r-val AND x-val
                    var layer_idx = construction.materials.indexOf(label);
                    var x_pos = construction.thicknesses.slice(0, layer_idx + 1).reduce(function (a, b) {
                      return a + b;
                    }, 0);
                    return ["".concat(label, ": ").concat(tooltipItem.value, " mm"), "R: ".concat(_Helpers_js__WEBPACK_IMPORTED_MODULE_3__["default"].precise(construction.r_vals[layer_idx], 3)), "x = ".concat(_Helpers_js__WEBPACK_IMPORTED_MODULE_3__["default"].fixed(x_pos), " mm")];
                  }
                } else {
                  // Temperature Point
                  // show temp with degC and x (x if not endpoint)
                  var tempDataLength = data.datasets[tooltipItem.datasetIndex].data.length;
                  var tooltip = ["".concat(_Helpers_js__WEBPACK_IMPORTED_MODULE_3__["default"].fixed(tooltipItem.value), " ").concat(String.fromCharCode(176), "C")]; // if not endpoint, include x-value

                  if (tooltipItem.index != 0 && tooltipItem.index != tempDataLength - 1) {
                    tooltip.push("x = ".concat(_Helpers_js__WEBPACK_IMPORTED_MODULE_3__["default"].fixed(tooltipItem.xLabel), " mm"));
                  }

                  return tooltip;
                }
              }
            }
          },
          responsive: false
        }
      });
      return myChart;
    }
  }, {
    key: "clearCharts",
    value: function clearCharts() {
      Chart.helpers.each(Chart.instances, function (instance) {
        instance.chart.destroy();
      });
    }
  }, {
    key: "drawTemperatures",
    value: function drawTemperatures(construction, chart) {
      var t_o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 35;
      var t_i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 24;
      // insert first so drawn ontop of bar chart
      chart.data.datasets.unshift({
        label: "temperature",
        data: Therm.calculateIntermediateTemps(construction, chart, t_o, t_i),
        type: 'line',
        yAxisID: 'y-line',
        lineTension: 0,
        borderWidth: 1,
        borderColor: '#f00',
        pointStyle: 'circle',
        pointBorderColor: '#f00',
        pointBackgroundColor: '#f00',
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
      });
      chart.options.scales.yAxes.push({
        id: 'y-line',
        type: 'linear',
        position: 'left',
        ticks: {
          min: 2 * Math.round((Math.min(t_o, t_i) - 2) / 2),
          max: 2 * Math.round((Math.max(t_o, t_i) + 2) / 2)
        },
        scaleLabel: {
          labelString: "Temperature",
          display: true,
          fontColor: '#f00'
        }
      });
      chart.update();
    }
  }, {
    key: "calculateQ_area",
    value: function calculateQ_area(construction, t_o, t_i) {
      // Q/A = UdT [W/m2]
      return construction.u_value * (t_o - t_i);
    } // calculate temperatures between layers in construction

  }, {
    key: "calculateIntermediateTemps",
    value: function calculateIntermediateTemps(construction, chart, t_o, t_i) {
      // Get heat transfer rate for construction
      var Q_area = Therm.calculateQ_area(construction, t_o, t_i); // get x-axis range

      var xMin = chart.scales['x-axis-0'].min;
      var xMax = chart.scales['x-axis-0'].max; // intialise first temps in output array (external temperature)

      var temps = [{
        x: 0,
        y: t_o
      }]; // loop through r vals, calculate temps external to internal

      construction.r_vals.forEach(function (r_val, idx) {
        // get intermediate temp based on temp to left
        var t_n = temps[idx]['y'] - Q_area / (1 / r_val);
        temps.push({
          x: temps[idx]['x'] + construction.thicknesses[idx],
          y: t_n
        });
      }); // push end points

      temps.unshift({
        x: xMin,
        y: t_o
      });
      temps.push({
        x: xMax,
        y: t_i
      });
      return temps;
    }
  }, {
    key: "get_dataset",
    value: function get_dataset(data) {
      // define external and internal air layers
      var ext_air = {
        label: 'air (ext.)',
        data: [-20],
        backgroundColor: 'rgba(0,0,0,0)',
        stack: "main"
      };
      var int_air = {
        label: 'air (int.)',
        data: [20],
        backgroundColor: 'rgba(0,0,0,0)',
        stack: "main"
      }; // define output

      var output = []; // if surface resitance enabled

      var surface = _UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].surfaceResistanceEnabled();

      if (surface) {
        // define surface layers
        var r_ext = {
          label: 'R_surface (ext.)',
          data: [-0.05],
          backgroundColor: 'rgba(89, 241, 234, 1)',
          stack: "main"
        };
        output.push(r_ext);
      } // create output array, set first item as air external, second as ext surface resistance


      output.push(ext_air);
      data.materials.forEach(function (material, idx) {
        var d = {};
        d.label = material;
        d.data = [data.thicknesses[idx]]; //d.borderWidth = 2;

        d.stack = "main"; // if air cavity make transperent

        if (data.k_vals[idx] === "") {
          d.backgroundColor = 'rgba(232, 246, 247, 0.4)';
        } else {
          // from randomColor library
          d.backgroundColor = randomColor();
        }

        output.push(d);
      });

      if (surface) {
        var r_int = {
          label: 'R_surface (int.)',
          data: [0.05],
          backgroundColor: 'rgba(89, 241, 234, 1)',
          stack: "main"
        };
        output.push(r_int);
      }

      ;
      output.push(int_air);
      return output;
    }
  }, {
    key: "calcTotalR",
    value: function calcTotalR(construction, r_int, r_ext) {
      return Number(construction.r_value) + r_int + r_ext;
    }
  }, {
    key: "defaultCanvasImage",
    value: function defaultCanvasImage() {
      // get canvas
      var canvas = document.querySelector('#canvas-construction'); // set context

      var ctx = canvas.getContext('2d'); // get canvas height and width

      var h = canvas.clientHeight;
<<<<<<< HEAD
      var w = canvas.clientWidth; // set inlay offset
=======
      var w = canvas.clientWidth; // clear canvas content (if exists)

      ctx.clearRect(0, 0, w, h); // set inlay offset
>>>>>>> 1b01c20... Update Therm.js to clear native canvas elements on reset

      var offset = 5; // draw rectangle

      ctx.lineWidth = 0.3;
      ctx.strokeRect(offset, offset, w - offset * 2, h - offset * 2); // draw message

      ctx.font = "18px Lato";
      ctx.textAlign = "center";
      ctx.fillStyle = "gray";

      if (window.innerWidth <= 768) {
        ctx.fillText("to draw a construction enter material details", w / 2, h / 2 - 18 / 2);
        ctx.fillText("in the input table or select from history below", w / 2, h / 2 + 18 / 2);
      } else {
        ctx.fillText("to draw a construction enter material details in the input table or select from history below", w / 2, h / 2);
      }
    } // HELPERS

  }, {
    key: "supportingLayerNames",
    value: function supportingLayerNames() {
      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
      var names = ['R_surface (ext.)', 'R_surface (int.)', 'air (int.)', 'air (ext.)'];

      switch (category) {
        case "all":
          return names;

        case "surface":
          return names.slice(0, 2);

        case "air":
          return names.slice(2, 4);
      }
    }
  }]);

  return Therm;
}();



/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage.js */ "./src/js/Storage.js");
/* harmony import */ var _Therm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Therm.js */ "./src/js/Therm.js");
/* harmony import */ var _Construction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Construction.js */ "./src/js/Construction.js");





 // UI Class: Control on-screen rendering (except Canvas)

var UI =
/*#__PURE__*/
function () {
  function UI() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UI);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UI, null, [{
    key: "modifyRowController",
    value: function modifyRowController(el) {
      if (el.classList.contains('delete-row')) {
        console.log('Delete row!');
        UI.deleteRow(el);
      } else if (el.classList.contains('add-row')) {
        console.log('Add row above!');
        UI.addRowAbove(el);
      }
    }
  }, {
    key: "addRowAbove",
    value: function addRowAbove(row) {
      // Get index of row in table
      var idx = row.closest('tr').rowIndex; // Get table element

      var table = row.closest('table'); // Insert row into table at index

      var newRow = table.insertRow(idx); // Fill row with styled table row html

      newRow.innerHTML = UI.rowInnerHTML();
    }
  }, {
    key: "deleteRow",
    value: function deleteRow(cell) {
      // Find row cell belongs too and remove row
      cell.closest('tr').remove();
    }
  }, {
    key: "addToInputLayers",
    value: function addToInputLayers(table_body) {
      var rowtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "material";
      var row = document.createElement('tr');
      var new_row;

      if (rowtype === "cavity") {
        row.classList.add("cavity");
        row.innerHTML = UI.cavityRowInnerHTML();
      } else {
        row.innerHTML = UI.rowInnerHTML();
      } //append to table, return handle


      new_row = table_body.appendChild(row);
      return new_row;
    }
  }, {
    key: "clearTableBody",
    value: function clearTableBody(table) {
      // // returns handle to new table body
      // remove body
      table.querySelector('tbody').remove(); // add new body

      var body = document.createElement('tbody');
      body.classList.add('sortable');
      var tableBody = table.appendChild(body);
      return tableBody;
    }
  }, {
    key: "populateHistory",
    value: function populateHistory() {
      // get history table handle
      var historyTable = document.querySelector('#history'); // clear table

      var tableBody = UI.clearTableBody(historyTable); // get local storage data

      var constructions = _Storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].getConstructions(); // repopulate

      constructions.forEach(function (construction) {
        UI.addToHistory(construction, tableBody);
      });
    }
  }, {
    key: "addToHistory",
    value: function addToHistory(construction, table) {
      // create new row element
      var row = document.createElement('tr'); // fill row

      row.innerHTML = "\n            <th scope=\"row\"><input type=\"text\" placeholder=\"add name here...\" class=\"form-control-plaintext font-weight-bold\" value=\"".concat(construction.name || '', "\"></th>\n            <td>").concat(UI.badgeFormatter({
        list: construction.materials,
        class_options: 'mb-1 text-large'
      }), "</td>\n            <td>").concat(UI.badgeFormatter({
        list: construction.thicknesses,
        class_options: 'mb-1 text-large'
      }), "</td>\n            <td>").concat(UI.badgeFormatter({
        list: construction.k_vals,
        class_options: 'mb-1 text-large'
      }), "</td>\n            <td>").concat(UI.badgeFormatter({
        list: construction.r_vals.map(function (val) {
          return Helpers.formatNumberLength(val, 5);
        }),
        class_options: 'mb-1 text-large'
      }), "</td>\n            <td>").concat(UI.badgeFormatter({
        list: [Helpers.formatNumberLength(_Construction_js__WEBPACK_IMPORTED_MODULE_5__["default"].u_value(construction), 5)],
        style: 'warning',
        class_options: 'text-large'
      }), "</td>\n            <td>").concat(UI.badgeFormatter({
        list: [Helpers.formatNumberLength(construction.r_value, 5)],
        style: 'warning',
        class_options: 'text-large'
      }), "</td>\n            <td class=\"align-middle text-center text-danger\">delete</td>\n            <td class=\"d-none\" id=\"c_id\">").concat(construction._idToken, "</td>"); // append row to table

      table.appendChild(row);
    }
  }, {
    key: "populateInputTableFromConstruction",
    value: function populateInputTableFromConstruction(construction) {
      var table = document.querySelector('#input-layers');
      var tableBody = UI.clearTableBody(table); // for each construction layer, add row and populate

      construction.materials.forEach(function (material, idx) {
        var data = [material, construction.thicknesses[idx], construction.k_vals[idx]]; // check for row type: material or air layer

        var rowtype;

        if (data[2] === "") {
          rowtype = "cavity";
        } else {
          rowtype = "material";
        }

        var new_row = UI.addToInputLayers(tableBody, rowtype);
        var fields = new_row.querySelectorAll('input');
        fields.forEach(function (field, idx) {
          field.value = data[idx];
        });
      });
    }
  }, {
    key: "displayConstructionResults",
    value: function displayConstructionResults(construction) {
      // set display digit length
      var numDigits = 5;
      var r = document.querySelector("#r-construction");
      var u = document.querySelector("#u-construction");
      r.value = Helpers.formatNumberLength(construction.r_value, numDigits);
      u.value = Helpers.formatNumberLength(construction.u_value, numDigits);
      var r_t = document.querySelector("#r-total");
      var u_t = document.querySelector("#u-total");

      if (UI.surfaceResistanceEnabled()) {
        var r_surface = UI.getSurfaceResistance();
        var r_total = _Therm_js__WEBPACK_IMPORTED_MODULE_4__["default"].calcTotalR.apply(_Therm_js__WEBPACK_IMPORTED_MODULE_4__["default"], [construction].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(r_surface)));
        r_t.value = Helpers.formatNumberLength(r_total, numDigits);
        u_t.value = Helpers.formatNumberLength(1 / r_total, numDigits);
      } else {
        r_t.value = Helpers.formatNumberLength(construction.r_value, numDigits);
        u_t.value = Helpers.formatNumberLength(construction.u_value, numDigits);
      }
    }
  }, {
    key: "clearConstructionResults",
    value: function clearConstructionResults() {
      var r = document.querySelector("#r-construction");
      var u = document.querySelector("#u-construction");
      var r_t = document.querySelector("#r-total");
      var u_t = document.querySelector("#u-total");
      r.value = "0.0";
      u.value = "0.0";
      r_t.value = "0.0";
      u_t.value = "0.0";
    }
  }, {
    key: "getSurfaceResistance",
    value: function getSurfaceResistance() {
      var output = [];
      output.push(Number(document.querySelector("#r-external").value));
      output.push(Number(document.querySelector("#r-internal").value));
      return output;
    }
  }, {
    key: "surfaceResistanceEnabled",
    value: function surfaceResistanceEnabled() {
      return document.querySelector('#customSwitch1').checked;
    } // HELPERS

  }, {
    key: "rowInnerHTML",
    value: function rowInnerHTML() {
      // Stores row HTML for new rows. Not sure where else to keep this?
      var innerHTML = "<td class=\"align-middle text-center\"><i class=\"fas fa-circle fa-xs text-primary\"></i></td>\n        <td><input type=\"text\" placeholder=\"material name\" class=\"form-control-plaintext\"></td>\n        <td><input type=\"text\" placeholder=\"depth\" class=\"form-control-plaintext\"></td>\n        <td><input type=\"text\" placeholder=\"k-val\" class=\"form-control-plaintext\"></td>\n        <td class=\"align-middle text-center\"><i class=\"far fa-plus-square fa-lg d-none row-ops add-row\"></i></td>\n        <td class=\"align-middle text-center\"><i class=\"fas fa-times fa-lg d-none row-ops text-danger delete-row\"></i></td>";
      return innerHTML;
    }
  }, {
    key: "cavityRowInnerHTML",
    value: function cavityRowInnerHTML() {
      var innerHTML = "<td class=\"align-middle text-center\"><i class=\"fas fa-circle fa-xs text-primary\"></i></td>\n        <td><input type=\"text\" disabled value=\"== unventilated cavity ==\" class=\"form-control-plaintext font-italic\"></td>\n        <td><input type=\"text\" value=\"20\" class=\"form-control-plaintext\"></td>\n        <td><input type=\"text\" disabled value=\"\" class=\"form-control-plaintext text-secondary\"></td>\n        <td class=\"align-middle text-center\"><i class=\"far fa-plus-square fa-lg d-none row-ops add-row\"></i></td>\n        <td class=\"align-middle text-center\"><i class=\"fas fa-times fa-lg d-none row-ops text-danger delete-row\"></i></td>";
      return innerHTML;
    }
  }, {
    key: "badgeFormatter",
    value: function badgeFormatter() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$list = _ref.list,
          list = _ref$list === void 0 ? [] : _ref$list,
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? false : _ref$style,
          _ref$class_options = _ref.class_options,
          class_options = _ref$class_options === void 0 ? '' : _ref$class_options,
          _ref$unit = _ref.unit,
          unit = _ref$unit === void 0 ? '' : _ref$unit;

      var els = '';
      list.forEach(function (item, idx) {
        if (style) {
          els = els.concat("<div class=\"d-block\"><span class=\"badge badge-".concat(style, " ").concat(class_options, "\">").concat(item, " ").concat(unit, "</span></div>"));
        } else {
          els = els.concat("<div class=\"d-block\"><span class=\"badge badge-".concat(UI.colorList(idx), " ").concat(class_options, "\">").concat(item, " ").concat(unit, "</span></div>"));
        }
      });
      return els;
    }
  }, {
    key: "colorList",
    value: function colorList(idx) {
      var colors = ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark'];
      return colors[idx];
    }
  }]);

  return UI;
}();


;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map