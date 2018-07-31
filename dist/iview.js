(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("iview", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["iview"] = factory(require("vue"));
	else
		root["iview"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_27__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findComponentUpward = exports.deepCopy = exports.MutationObserver = undefined;

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

exports.oneOf = oneOf;
exports.camelcaseToHyphen = camelcaseToHyphen;
exports.getStyle = getStyle;
exports.scrollTop = scrollTop;
exports.findComponentsDownward = findComponentsDownward;

var _vue = __webpack_require__(27);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;
function oneOf(value, validList) {
    for (var i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

var MutationObserver = exports.MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
}

function typeOf(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

function deepCopy(data) {
    var t = typeOf(data);
    var o = void 0;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (var i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (var _i in data) {
            o[_i] = deepCopy(data[_i]);
        }
    }
    return o;
}

exports.deepCopy = deepCopy;
function scrollTop(el) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var to = arguments[2];
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
    var endCallback = arguments[4];

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        var _this = this;

        if (start === end) {
            endCallback && endCallback();
            return;
        }

        var d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(function () {
            (0, _newArrowCheck3.default)(this, _this);
            return scroll(d, end, step);
        }.bind(this));
    }
    scroll(from, to, step);
}

function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
exports.findComponentUpward = findComponentUpward;
function findComponentsDownward(context, componentName) {
    var _this2 = this;

    return context.$children.reduce(function (components, child) {
        (0, _newArrowCheck3.default)(this, _this2);

        if (child.$options.name === componentName) components.push(child);
        var foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }.bind(this), []);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(1);
var ctx = __webpack_require__(46);
var hide = __webpack_require__(12);
var has = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(36);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(127);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43);
var defined = __webpack_require__(30);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TYPE_VALUE_RESOLVER_MAP = exports.RANGE_SEPARATOR = exports.DEFAULT_FORMATS = exports.formatDateLabels = exports.initTimeDate = exports.nextMonth = exports.prevMonth = exports.siblingMonth = exports.getFirstDayOfMonth = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.isInRange = exports.clearHours = exports.toDate = undefined;

var _slicedToArray2 = __webpack_require__(21);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _toConsumableArray2 = __webpack_require__(26);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _date2 = __webpack_require__(137);

var _date3 = _interopRequireDefault(_date2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDate = exports.toDate = function toDate(date) {
    var _date = new Date(date);

    if (isNaN(_date.getTime()) && typeof date === 'string') {
        _date = date.split('-').map(Number);
        _date[1] += 1;
        _date = new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(_date))))();
    }


    if (isNaN(_date.getTime())) return null;
    return _date;
};

var clearHours = exports.clearHours = function clearHours(time) {
    var cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

var isInRange = exports.isInRange = function (time, a, b) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (!a || !b) return false;

    var _sort = [a, b].sort(),
        _sort2 = (0, _slicedToArray3.default)(_sort, 2),
        start = _sort2[0],
        end = _sort2[1];

    return time >= start && time <= end;
}.bind(undefined);

var formatDate = exports.formatDate = function formatDate(date, format) {
    date = toDate(date);
    if (!date) return '';
    return _date3.default.format(date, format || 'yyyy-MM-dd');
};

var parseDate = exports.parseDate = function parseDate(string, format) {
    return _date3.default.parse(string, format || 'yyyy-MM-dd');
};

var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
    var temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};

var siblingMonth = exports.siblingMonth = function siblingMonth(src, diff) {
    var temp = new Date(src);
    var newMonth = temp.getMonth() + diff;
    var newMonthDayCount = getDayCountOfMonth(temp.getFullYear(), newMonth);
    if (newMonthDayCount < temp.getDate()) {
        temp.setDate(newMonthDayCount);
    }
    temp.setMonth(newMonth);

    return temp;
};

var prevMonth = exports.prevMonth = function prevMonth(src) {
    return siblingMonth(src, -1);
};

var nextMonth = exports.nextMonth = function nextMonth(src) {
    return siblingMonth(src, 1);
};

var initTimeDate = exports.initTimeDate = function initTimeDate() {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
};

var formatDateLabels = exports.formatDateLabels = function () {
    var _this = this;

    var formats = {
        yyyy: function yyyy(date) {
            (0, _newArrowCheck3.default)(this, _this);
            return date.getFullYear();
        }.bind(this),
        m: function m(date) {
            (0, _newArrowCheck3.default)(this, _this);
            return date.getMonth() + 1;
        }.bind(this),
        mm: function mm(date) {
            (0, _newArrowCheck3.default)(this, _this);
            return ('0' + (date.getMonth() + 1)).slice(-2);
        }.bind(this),
        mmm: function mmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);

            var monthName = date.toLocaleDateString(locale, {
                month: 'long'
            });
            return monthName.slice(0, 3);
        }.bind(this),
        Mmm: function Mmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);

            var monthName = date.toLocaleDateString(locale, {
                month: 'long'
            });
            return (monthName[0].toUpperCase() + monthName.slice(1).toLowerCase()).slice(0, 3);
        }.bind(this),
        mmmm: function mmmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);
            return date.toLocaleDateString(locale, {
                month: 'long'
            });
        }.bind(this),
        Mmmm: function Mmmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);

            var monthName = date.toLocaleDateString(locale, {
                month: 'long'
            });
            return monthName[0].toUpperCase() + monthName.slice(1).toLowerCase();
        }.bind(this)
    };
    var formatRegex = new RegExp(['yyyy', 'Mmmm', 'mmmm', 'Mmm', 'mmm', 'mm', 'm'].join('|'), 'g');

    return function (locale, format, date) {
        var _this2 = this;

        var componetsRegex = /(\[[^\]]+\])([^\[\]]+)(\[[^\]]+\])/;
        var components = format.match(componetsRegex).slice(1);
        var separator = components[1];
        var labels = [components[0], components[2]].map(function (component) {
            (0, _newArrowCheck3.default)(this, _this2);

            var label = component.replace(/\[[^\]]+\]/, function (str) {
                (0, _newArrowCheck3.default)(this, _this2);

                return str.slice(1, -1).replace(formatRegex, function (match) {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return formats[match](date, locale);
                }.bind(this));
            }.bind(this));
            return {
                label: label,
                type: component.indexOf('yy') != -1 ? 'year' : 'month'
            };
        }.bind(this));
        return {
            separator: separator,
            labels: labels
        };
    };
}();

var DEFAULT_FORMATS = exports.DEFAULT_FORMATS = {
    month: 'yyyy-MM',
    year: 'yyyy',
    daterange: 'yyyy-MM'
};

var RANGE_SEPARATOR = exports.RANGE_SEPARATOR = ' - ';

var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
    return formatDate(value, format);
};
var DATE_PARSER = function DATE_PARSER(text, format) {
    return parseDate(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
    if (Array.isArray(value) && value.length === 2) {
        var start = value[0];
        var end = value[1];

        if (start && end) {
            return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format);
        }
    } else if (!Array.isArray(value) && value instanceof Date) {
        return formatDate(value, format);
    }
    return '';
};
var RANGE_PARSER = function RANGE_PARSER(text, format) {
    var array = Array.isArray(text) ? text : text.split(RANGE_SEPARATOR);
    if (array.length === 2) {
        var range1 = array[0];
        var range2 = array[1];

        return [parseDate(range1, format), parseDate(range2, format)];
    }
    return [];
};

var TYPE_VALUE_RESOLVER_MAP = exports.TYPE_VALUE_RESOLVER_MAP = {
    default: {
        formatter: function formatter(value) {
            if (!value) return '';
            return '' + value;
        },
        parser: function parser(text) {
            if (text === undefined || text === '') return null;
            return text;
        }
    },
    date: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    datetime: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    daterange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    datetimerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    timerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    time: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    month: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    year: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    multiple: {
        formatter: function formatter(value, format) {
            (0, _newArrowCheck3.default)(undefined, undefined);

            return value.filter(Boolean).map(function (date) {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return formatDate(date, format);
            }.bind(undefined)).join(',');
        }.bind(undefined),
        parser: function parser(value, format) {
            (0, _newArrowCheck3.default)(undefined, undefined);

            var values = typeof value === 'string' ? value.split(',') : value;
            return values.map(function (value) {
                (0, _newArrowCheck3.default)(undefined, undefined);

                if (value instanceof Date) return value;
                if (typeof value === 'string') value = value.trim();else if (typeof value !== 'number' && !value) value = '';
                return parseDate(value, format);
            }.bind(undefined));
        }.bind(undefined)
    },
    number: {
        formatter: function formatter(value) {
            if (!value) return '';
            return '' + value;
        },
        parser: function parser(text) {
            var result = Number(text);

            if (!isNaN(text)) {
                return result;
            } else {
                return null;
            }
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(122);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(60);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(96)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(52)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(115);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _broadcast(componentName, eventName, params) {
    var _this = this;

    this.$children.forEach(function (child) {
        (0, _newArrowCheck3.default)(this, _this);

        var name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    }.bind(this));
}
exports.default = {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _locale = __webpack_require__(73);

exports.default = {
    methods: {
        t: function t() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _locale.t.apply(this, args);
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(22) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
var global = __webpack_require__(4);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(22);
var wksExt = __webpack_require__(40);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(84)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6);
var core = __webpack_require__(1);
var fails = __webpack_require__(14);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(86);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(87);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(51);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(57);

var _stringify2 = _interopRequireDefault(_stringify);

var _toConsumableArray2 = __webpack_require__(26);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(21);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _input = __webpack_require__(61);

var _input2 = _interopRequireDefault(_input);

var _dropdown = __webpack_require__(63);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _vClickOutsideX = __webpack_require__(65);

var _assist = __webpack_require__(5);

var _util = __webpack_require__(16);

var _emitter = __webpack_require__(28);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-date-picker';
var pickerPrefixCls = 'ivu-picker';

var isEmptyArray = function (val) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return val.reduce(function (isEmpty, str) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return isEmpty && !str || typeof str === 'string' && str.trim() === '';
    }.bind(undefined), true);
}.bind(undefined);

var pulseElement = function (el) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var pulseClass = 'ivu-date-picker-btn-pulse';
    el.classList.add(pulseClass);
    setTimeout(function () {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return el.classList.remove(pulseClass);
    }.bind(undefined), 200);
}.bind(undefined);

exports.default = {
    mixins: [_emitter2.default],
    components: { iInput: _input2.default, Drop: _dropdown2.default },
    directives: { clickOutside: _vClickOutsideX.directive },
    props: {
        format: {
            type: String
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        editable: {
            type: Boolean,
            default: true
        },
        clearable: {
            type: Boolean,
            default: true
        },
        confirm: {
            type: Boolean,
            default: false
        },
        open: {
            type: Boolean,
            default: null
        },
        timePickerOptions: {
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined),
            type: Object
        },
        splitPanels: {
            type: Boolean,
            default: false
        },
        startDate: {
            type: Date
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        placeholder: {
            type: String,
            default: ''
        },
        placement: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },

            default: 'bottom-start'
        },
        name: {
            type: String
        },
        elementId: {
            type: String
        },
        steps: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        value: {
            type: [Date, String, Array]
        },
        options: {
            type: Object,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined)
        }
    },
    data: function data() {
        var isRange = this.type.includes('range');
        var emptyArray = isRange ? [null, null] : [null];
        var initialValue = isEmptyArray((isRange ? this.value : [this.value]) || []) ? emptyArray : this.parseDate(this.value);

        return {
            prefixCls: prefixCls,
            showClose: false,
            visible: false,
            internalValue: initialValue,
            disableClickOutSide: false,
            selectionMode: this.onSelectionModeChange(this.type),
            forceInputRerender: 1,
            isFocused: false,
            focusedDate: initialValue[0] || this.startDate || new Date(),
            focusedTime: {
                column: 0,
                picker: 0,
                active: false
            },
            internalFocus: false
        };
    },

    computed: {
        wrapperClasses: function wrapperClasses() {
            return [prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-focused', this.isFocused)];
        },
        publicVModelValue: function publicVModelValue() {
            var _this = this;

            if (!this.multiple) {
                var isRange = this.type.includes('range');
                var val = this.internalValue.map(function (date) {
                    (0, _newArrowCheck3.default)(this, _this);
                    return date instanceof Date ? new Date(date) : date || '';
                }.bind(this));

                if (this.type.match(/^time/)) val = val.map(this.formatDate);
                return isRange || this.multiple ? val : val[0];
            }
        },
        publicStringValue: function publicStringValue() {
            var formatDate = this.formatDate,
                publicVModelValue = this.publicVModelValue,
                type = this.type;

            if (type.match(/^time/)) return publicVModelValue;
            if (this.multiple) return formatDate(publicVModelValue);
            return Array.isArray(publicVModelValue) ? publicVModelValue.map(formatDate) : formatDate(publicVModelValue);
        },
        opened: function opened() {
            return this.open === null ? this.visible : this.open;
        },
        iconType: function iconType() {
            var icon = 'ios-calendar-outline';
            if (this.showClose) icon = 'ios-close-circle';
            return icon;
        },
        transition: function transition() {
            var bottomPlaced = this.placement.match(/^bottom/);
            return bottomPlaced ? 'slide-up' : 'slide-down';
        },
        visualValue: function visualValue() {
            return this.formatDate(this.internalValue);
        },
        isConfirm: function isConfirm() {
            return this.confirm || this.type === 'datetime' || this.type === 'datetimerange' || this.multiple;
        }
    },
    methods: {
        onSelectionModeChange: function onSelectionModeChange(type) {
            if (type.match(/^date/)) type = 'month';
            this.selectionMode = (0, _assist.oneOf)(type, ['year', 'month', 'date']) && type;
            return this.selectionMode;
        },
        handleClose: function handleClose(e) {
            if (e && e.type === 'mousedown' && this.visible) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            if (this.visible) {
                var pickerPanel = this.$refs.pickerPanel && this.$refs.pickerPanel.$el;
                if (e && pickerPanel && pickerPanel.contains(e.target)) return;

                this.visible = false;
                e && e.preventDefault();
                e && e.stopPropagation();
                return;
            }

            this.isFocused = false;
            this.disableClickOutSide = false;
        },
        handleFocus: function handleFocus(e) {
            if (this.readonly) return;
            this.isFocused = true;
            if (e && e.type === 'focus') return;
            this.visible = true;
        },
        handleBlur: function handleBlur(e) {
            if (this.internalFocus) {
                this.internalFocus = false;
                return;
            }
            if (this.visible) {
                e.preventDefault();
                return;
            }

            this.isFocused = false;
            this.onSelectionModeChange(this.type);
            this.internalValue = this.internalValue.slice();
            this.reset();
            this.$refs.pickerPanel.onToggleVisibility(false);
        },
        reset: function reset() {
            this.$refs.pickerPanel.reset && this.$refs.pickerPanel.reset();
        },
        handleInputChange: function handleInputChange(event) {
            var _this2 = this;

            var isArrayValue = this.type.includes('range') || this.multiple;
            var oldValue = this.visualValue;
            var newValue = event.target.value;
            var newDate = this.parseDate(newValue);
            var disabledDateFn = this.options && typeof this.options.disabledDate === 'function' && this.options.disabledDate;
            var valueToTest = isArrayValue ? newDate : newDate[0];
            var isDisabled = disabledDateFn && disabledDateFn(valueToTest);
            var isValidDate = newDate.reduce(function (valid, date) {
                (0, _newArrowCheck3.default)(this, _this2);
                return valid && date instanceof Date;
            }.bind(this), true);

            if (newValue !== oldValue && !isDisabled && isValidDate) {
                this.emitChange(this.type);
                this.internalValue = newDate;
            } else {
                this.forceInputRerender++;
            }
        },
        handleInputMouseenter: function handleInputMouseenter() {
            if (this.readonly || this.disabled) return;
            if (this.visualValue && this.clearable) {
                this.showClose = true;
            }
        },
        handleInputMouseleave: function handleInputMouseleave() {
            this.showClose = false;
        },
        handleIconClick: function handleIconClick() {
            if (this.showClose) {
                this.handleClear();
            } else if (!this.disabled) {
                this.handleFocus();
            }
        },
        handleClear: function handleClear() {
            var _this3 = this;

            this.visible = false;
            this.internalValue = this.internalValue.map(function () {
                (0, _newArrowCheck3.default)(this, _this3);
                return null;
            }.bind(this));
            this.$emit('on-clear');
            this.dispatch('FormItem', 'on-form-change', '');
            this.emitChange(this.type);
            this.reset();

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this3);
                return this.onSelectionModeChange(this.type);
            }.bind(this), 500);
        },
        emitChange: function emitChange(type) {
            var _this4 = this;

            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this4);

                this.$emit('on-change', this.publicStringValue, type);
                this.dispatch('FormItem', 'on-form-change', this.publicStringValue);
            }.bind(this));
        },
        parseDate: function parseDate(val) {
            var _this5 = this;

            var isRange = this.type.includes('range');
            var type = this.type;
            var parser = (_util.TYPE_VALUE_RESOLVER_MAP[type] || _util.TYPE_VALUE_RESOLVER_MAP['default']).parser;
            var format = this.format || _util.DEFAULT_FORMATS[type];
            var multipleParser = _util.TYPE_VALUE_RESOLVER_MAP['multiple'].parser;

            if (val && type === 'time' && !(val instanceof Date)) {
                val = parser(val, format);
            } else if (this.multiple && val) {
                val = multipleParser(val, format);
            } else if (isRange) {
                if (!val) {
                    val = [null, null];
                } else {
                    if (typeof val === 'string') {
                        val = parser(val, format);
                    } else if (type === 'timerange') {
                        val = parser(val, format).map(function (v) {
                            (0, _newArrowCheck3.default)(this, _this5);
                            return v || '';
                        }.bind(this));
                    } else {
                        var _val = val,
                            _val2 = (0, _slicedToArray3.default)(_val, 2),
                            start = _val2[0],
                            end = _val2[1];

                        if (start instanceof Date && end instanceof Date) {
                            val = val.map(function (date) {
                                (0, _newArrowCheck3.default)(this, _this5);
                                return new Date(date);
                            }.bind(this));
                        } else if (typeof start === 'string' && typeof end === 'string') {
                            val = parser(val.join(_util.RANGE_SEPARATOR), format);
                        } else if (!start || !end) {
                            val = [null, null];
                        }
                    }
                }
            } else if (typeof val === 'string' && type.indexOf('time') !== 0) {
                val = parser(val, format) || null;
            }

            return isRange || this.multiple ? val || [] : [val];
        },
        formatDate: function formatDate(value) {
            var format = _util.DEFAULT_FORMATS[this.type];

            if (this.multiple) {
                var formatter = _util.TYPE_VALUE_RESOLVER_MAP.multiple.formatter;
                return formatter(value, this.format || format);
            } else {
                var _ref2 = _util.TYPE_VALUE_RESOLVER_MAP[this.type] || _util.TYPE_VALUE_RESOLVER_MAP['default'],
                    _formatter = _ref2.formatter;

                return _formatter(value, this.format || format);
            }
        },
        onPick: function onPick(dates) {
            var _this6 = this;

            var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var type = arguments[2];

            if (this.multiple) {
                var pickedTimeStamp = dates.getTime();
                var indexOfPickedDate = this.internalValue.findIndex(function (date) {
                    (0, _newArrowCheck3.default)(this, _this6);
                    return date && date.getTime() === pickedTimeStamp;
                }.bind(this));
                var allDates = [].concat((0, _toConsumableArray3.default)(this.internalValue), [dates]).filter(Boolean);
                var timeStamps = allDates.map(function (date) {
                    (0, _newArrowCheck3.default)(this, _this6);
                    return date.getTime();
                }.bind(this)).filter(function (ts, i, arr) {
                    (0, _newArrowCheck3.default)(this, _this6);
                    return arr.indexOf(ts) === i && i !== indexOfPickedDate;
                }.bind(this));
                this.internalValue = timeStamps.map(function (ts) {
                    (0, _newArrowCheck3.default)(this, _this6);
                    return new Date(ts);
                }.bind(this));
            } else {
                this.internalValue = Array.isArray(dates) ? dates : [dates];
            }

            if (this.internalValue[0]) this.focusedDate = this.internalValue[0];

            if (!this.isConfirm) this.onSelectionModeChange(this.type);
            if (!this.isConfirm) this.visible = visible;
            this.emitChange(type);
        },
        onPickSuccess: function onPickSuccess() {
            this.visible = false;
            this.$emit('on-ok');
            this.focus();
            this.reset();
        },
        focus: function focus() {
            this.$refs.input && this.$refs.input.focus();
        }
    },
    watch: {
        visible: function visible(state) {
            if (state === false) {
                this.$refs.drop.destroy();
            }
            this.$refs.drop.update();
            this.$emit('on-open-change', state);
        },
        value: function value(val) {
            this.internalValue = this.parseDate(val);
        },
        open: function open(val) {
            this.visible = val === true;
        },
        type: function type(_type) {
            this.onSelectionModeChange(_type);
        },
        publicVModelValue: function publicVModelValue(now, before) {
            var newValue = (0, _stringify2.default)(now);
            var oldValue = (0, _stringify2.default)(before);
            var shouldEmitInput = newValue !== oldValue || (typeof now === 'undefined' ? 'undefined' : (0, _typeof3.default)(now)) !== (typeof before === 'undefined' ? 'undefined' : (0, _typeof3.default)(before));
            if (shouldEmitInput) this.$emit('input', now);
        }
    },
    mounted: function mounted() {
        var _this7 = this;

        var initialValue = this.value;
        var parsedValue = this.publicVModelValue;
        if ((typeof initialValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(initialValue)) !== (typeof parsedValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(parsedValue)) || (0, _stringify2.default)(initialValue) !== (0, _stringify2.default)(parsedValue)) {
            this.$emit('input', this.publicVModelValue);
        }
        if (this.open !== null) this.visible = this.open;

        this.$on('focus-input', function () {
            (0, _newArrowCheck3.default)(this, _this7);
            return this.focus();
        }.bind(this));
    }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(94);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(103);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(53);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(97);
var setToStringTag = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(55);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(98);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(48)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(99).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(17);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(42);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa08faca_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa08faca_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa08faca_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa08faca_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa08faca_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _isNan = __webpack_require__(130);

var _isNan2 = _interopRequireDefault(_isNan);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(5);

var _emitter = __webpack_require__(28);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-input';

exports.default = {
    name: 'Input',
    mixins: [_emitter2.default],
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['text', 'password', 'url', 'email', 'date']);
            },

            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        placeholder: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: String,
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        rows: {
            type: Number,
            default: 2
        },
        readonly: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        number: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        spellcheck: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['on', 'off']);
            },

            default: 'off'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        elementId: {
            type: String
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
        search: {
            type: Boolean,
            default: false
        },
        enterButton: {
            type: [Boolean, String],
            default: false
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            prefixCls: prefixCls,
            prepend: true,
            append: true,
            slotReady: false,
            showPrefix: false,
            showSuffix: false
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            var _ref;

            return [prefixCls + '-wrapper', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-type', this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-group', this.prepend || this.append || this.search && this.enterButton), (0, _defineProperty3.default)(_ref, prefixCls + '-group-' + String(this.size), (this.prepend || this.append || this.search && this.enterButton) && !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-group-with-prepend', this.prepend), (0, _defineProperty3.default)(_ref, prefixCls + '-group-with-append', this.append || this.search && this.enterButton), (0, _defineProperty3.default)(_ref, prefixCls + '-hide-icon', this.append), (0, _defineProperty3.default)(_ref, prefixCls + '-with-search', this.search && this.enterButton), _ref)];
        },
        inputClasses: function inputClasses() {
            var _ref2;

            return ['' + prefixCls, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref2, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref2, prefixCls + '-with-prefix', this.showPrefix), (0, _defineProperty3.default)(_ref2, prefixCls + '-with-suffix', this.showSuffix || this.search && this.enterButton === false), _ref2)];
        }
    },
    methods: {
        handleEnter: function handleEnter(event) {
            this.$emit('on-enter', event);
            if (this.search) this.$emit('on-search', this.currentValue);
        },
        handleKeydown: function handleKeydown(event) {
            this.$emit('on-keydown', event);
        },
        handleKeypress: function handleKeypress(event) {
            this.$emit('on-keypress', event);
        },
        handleKeyup: function handleKeyup(event) {
            this.$emit('on-keyup', event);
        },
        handleIconClick: function handleIconClick(event) {
            this.$emit('on-click', event);
        },
        handleFocus: function handleFocus(event) {
            this.$emit('on-focus', event);
        },
        handleBlur: function handleBlur(event) {
            this.$emit('on-blur', event);
            if (!(0, _assist.findComponentUpward)(this, ['DatePicker', 'Search'])) {
                this.dispatch('FormItem', 'on-form-blur', this.currentValue);
            }
        },
        handleInput: function handleInput(event) {
            var value = event.target.value;
            if (this.number) value = (0, _isNan2.default)(Number(value)) ? value : Number(value);
            this.$emit('input', value);
            this.setCurrentValue(value);
            this.$emit('on-change', event);
        },
        handleChange: function handleChange(event) {
            this.$emit('on-input-change', event);
        },
        setCurrentValue: function setCurrentValue(value) {
            var _this = this;

            if (value === this.currentValue) return;
            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this);

                this.resizeTextarea();
            }.bind(this));
            this.currentValue = value;
            if (!(0, _assist.findComponentUpward)(this, ['DatePicker', 'Search'])) {
                this.dispatch('FormItem', 'on-form-change', value);
            }
        },
        resizeTextarea: function resizeTextarea() {
            var autosize = this.autosize;
            if (!autosize || this.type !== 'textarea') {
                return false;
            }

            var minRows = autosize.minRows;
            var maxRows = autosize.maxRows;
        },
        focus: function focus() {
            if (this.type === 'textarea') {
                this.$refs.textarea.focus();
            } else {
                this.$refs.input.focus();
            }
        },
        blur: function blur() {
            if (this.type === 'textarea') {
                this.$refs.textarea.blur();
            } else {
                this.$refs.input.blur();
            }
        },
        handleClear: function handleClear() {
            var e = { target: { value: '' } };
            this.$emit('input', '');
            this.setCurrentValue('');
            this.$emit('on-change', e);
        },
        handleSearch: function handleSearch() {
            if (this.disabled) return false;
            this.$refs.input.focus();
            this.$emit('on-search', this.currentValue);
        }
    },
    watch: {
        value: function value(val) {
            this.setCurrentValue(val);
        }
    },
    mounted: function mounted() {
        if (this.type !== 'textarea') {
            this.prepend = this.$slots.prepend !== undefined;
            this.append = this.$slots.append !== undefined;
            this.showPrefix = this.prefix !== '' || this.$slots.prefix !== undefined;
            this.showSuffix = this.suffix !== '' || this.$slots.suffix !== undefined;
        } else {
            this.prepend = false;
            this.append = false;
        }
        this.slotReady = true;
        this.resizeTextarea();
    }
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_df03066c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_df03066c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_df03066c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_df03066c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_df03066c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _vue = __webpack_require__(27);

var _vue2 = _interopRequireDefault(_vue);

var _assist = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

var Popper = isServer ? function () {} : __webpack_require__(134);exports.default = {
    name: 'Drop',
    props: {
        placement: {
            type: String,
            default: 'bottom-start'
        },
        className: {
            type: String
        }
    },
    data: function data() {
        return {
            popper: null,
            width: '',
            popperStatus: false
        };
    },

    computed: {
        styles: function styles() {
            var style = {};
            if (this.width) style.width = String(this.width) + 'px';
            return style;
        }
    },
    methods: {
        update: function update() {
            var _this = this;

            if (isServer) return;
            if (this.popper) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this);

                    this.popper.update();
                    this.popperStatus = true;
                }.bind(this));
            } else {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this);

                    this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                        placement: this.placement,
                        modifiers: {
                            computeStyle: {
                                gpuAcceleration: false
                            },
                            preventOverflow: {
                                boundariesElement: 'window'
                            }
                        },
                        onCreate: function onCreate() {
                            (0, _newArrowCheck3.default)(this, _this);

                            this.resetTransformOrigin();
                            this.$nextTick(this.popper.update());
                        }.bind(this),
                        onUpdate: function onUpdate() {
                            (0, _newArrowCheck3.default)(this, _this);

                            this.resetTransformOrigin();
                        }.bind(this)
                    });
                }.bind(this));
            }

            if (this.$parent.$options.name === 'iSelect') {
                this.width = parseInt((0, _assist.getStyle)(this.$parent.$el, 'width'));
            }
        },
        destroy: function destroy() {
            var _this2 = this;

            if (this.popper) {
                setTimeout(function () {
                    (0, _newArrowCheck3.default)(this, _this2);

                    if (this.popper && !this.popperStatus) {
                        this.popper.destroy();
                        this.popper = null;
                    }
                    this.popperStatus = false;
                }.bind(this), 300);
            }
        },
        resetTransformOrigin: function resetTransformOrigin() {
            if (!this.popper) return;

            var x_placement = this.popper.popper.getAttribute('x-placement');
            var placementStart = x_placement.split('-')[0];
            var placementEnd = x_placement.split('-')[1];
            var leftOrRight = x_placement === 'left' || x_placement === 'right';
            if (!leftOrRight) {
                this.popper.popper.style.transformOrigin = placementStart === 'bottom' || placementStart !== 'top' && placementEnd === 'start' ? 'center top' : 'center bottom';
            }
        }
    },
    created: function created() {
        this.$on('on-update-popper', this.update);
        this.$on('on-destroy-popper', this.destroy);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.popper) {
            this.popper.destroy();
        }
    }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vClickOutside=n():t.vClickOutside=n()}(this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=82)}([function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=!e(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(23)("wks"),o=e(13),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(32),o=e(28);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(15),o=e(37),i=e(27),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(7),o=e(14);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1),o=e(0),i=e(76),u=e(8),f=e(2),c=function(t,n,e){var a,s,l,p=t&c.F,v=t&c.G,y=t&c.S,d=t&c.P,h=t&c.B,b=t&c.W,m=v?o:o[n]||(o[n]={}),g=m.prototype,x=v?r:y?r[n]:(r[n]||{}).prototype;for(a in v&&(e=n),e)(s=!p&&x&&void 0!==x[a])&&f(m,a)||(l=s?x[a]:e[a],m[a]=v&&"function"!=typeof x[a]?e[a]:h&&s?i(l,r):b&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((m.virtual||(m.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&u(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(33),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=!0},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=e(0),i=e(16),u=e(19),f=e(7).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(4)},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(7).f,o=e(2),i=e(4)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(23)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(15),o=e(34),i=e(22),u=e(24)("IE_PROTO"),f=function(){},c=function(){var t,n=e(36)("iframe"),r=i.length;for(n.style.display="none",e(70).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n){t.exports={}},function(t,n,e){var r=e(11);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(33),o=e(22).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(2),o=e(5),i=e(73)(!1),u=e(24)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=u&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(7),o=e(15),i=e(10);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){t.exports=e(8)},function(t,n,e){var r=e(11),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){t.exports=!e(3)&&!e(6)(function(){return 7!=Object.defineProperty(e(36)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(16),o=e(9),i=e(35),u=e(8),f=e(26),c=e(74),a=e(21),s=e(69),l=e(4)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,y,d,h,b){c(e,n,y);var m,g,x,O=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",_="values"==d,j=!1,w=t.prototype,P=w[l]||w["@@iterator"]||d&&w[d],E=P||O(d),M=d?_?O("entries"):E:void 0,L="Array"==n&&w.entries||P;if(L&&(x=s(L.call(new t)))!==Object.prototype&&x.next&&(a(x,S,!0),r||"function"==typeof x[l]||u(x,l,v)),_&&P&&"values"!==P.name&&(j=!0,E=function(){return P.call(this)}),r&&!b||!p&&!j&&w[l]||u(w,l,E),f[n]=E,f[S]=v,d)if(m={values:_?E:O("values"),keys:h?E:O("keys"),entries:M},b)for(g in m)g in w||i(w,g,m[g]);else o(o.P+o.F*(p||j),n,m);return m}},function(t,n,e){var r=e(9);r(r.S,"Object",{create:e(25)})},function(t,n,e){e(39);var r=e(0).Object;t.exports=function(t,n){return r.create(t,n)}},function(t,n,e){t.exports={default:e(40),__esModule:!0}},function(t,n,e){var r=e(9),o=e(0),i=e(6);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(20),o=e(10);e(42)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){e(43),t.exports=e(0).Object.keys},function(t,n,e){t.exports={default:e(44),__esModule:!0}},function(t,n,e){var r=e(9);r(r.S+r.F*!e(3),"Object",{defineProperties:e(34)})},function(t,n,e){e(46);var r=e(0).Object;t.exports=function(t,n){return r.defineProperties(t,n)}},function(t,n,e){t.exports={default:e(47),__esModule:!0}},function(t,n,e){"use strict";var r=e(10),o=e(17),i=e(12),u=e(20),f=e(32),c=Object.assign;t.exports=!c||e(6)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=u(t),c=arguments.length,a=1,s=o.f,l=i.f;c>a;)for(var p,v=f(arguments[a++]),y=s?r(v).concat(s(v)):r(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(e[p]=v[p]);return e}:c},function(t,n,e){var r=e(9);r(r.S+r.F,"Object",{assign:e(49)})},function(t,n,e){e(50),t.exports=e(0).Object.assign},function(t,n,e){t.exports={default:e(51),__esModule:!0}},function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(52),i=(r=o)&&r.__esModule?r:{default:r};n.default=i.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},function(t,n,e){e(18)("observable")},function(t,n,e){e(18)("asyncIterator")},function(t,n){},function(t,n,e){var r=e(12),o=e(14),i=e(5),u=e(27),f=e(2),c=e(37),a=Object.getOwnPropertyDescriptor;n.f=e(3)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(30).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(31);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(10),o=e(17),i=e(12);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&n.push(u);return n}},function(t,n,e){var r=e(13)("meta"),o=e(11),i=e(2),u=e(7).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(6)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(3),u=e(9),f=e(35),c=e(61).KEY,a=e(6),s=e(23),l=e(21),p=e(13),v=e(4),y=e(19),d=e(18),h=e(60),b=e(59),m=e(15),g=e(11),x=e(5),O=e(27),S=e(14),_=e(25),j=e(58),w=e(57),P=e(7),E=e(10),M=w.f,L=P.f,k=j.f,T=r.Symbol,A=r.JSON,C=A&&A.stringify,F=v("_hidden"),N=v("toPrimitive"),I={}.propertyIsEnumerable,D=s("symbol-registry"),G=s("symbols"),R=s("op-symbols"),V=Object.prototype,W="function"==typeof T,B=r.QObject,H=!B||!B.prototype||!B.prototype.findChild,J=i&&a(function(){return 7!=_(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=M(V,n);r&&delete V[n],L(t,n,e),r&&t!==V&&L(V,n,r)}:L,$=function(t){var n=G[t]=_(T.prototype);return n._k=t,n},z=W&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},K=function(t,n,e){return t===V&&K(R,n,e),m(t),n=O(n,!0),m(e),o(G,n)?(e.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),e=_(e,{enumerable:S(0,!1)})):(o(t,F)||L(t,F,S(1,{})),t[F][n]=!0),J(t,n,e)):L(t,n,e)},q=function(t,n){m(t);for(var e,r=h(n=x(n)),o=0,i=r.length;i>o;)K(t,e=r[o++],n[e]);return t},Y=function(t){var n=I.call(this,t=O(t,!0));return!(this===V&&o(G,t)&&!o(R,t))&&(!(n||!o(this,t)||!o(G,t)||o(this,F)&&this[F][t])||n)},Q=function(t,n){if(t=x(t),n=O(n,!0),t!==V||!o(G,n)||o(R,n)){var e=M(t,n);return!e||!o(G,n)||o(t,F)&&t[F][n]||(e.enumerable=!0),e}},U=function(t){for(var n,e=k(x(t)),r=[],i=0;e.length>i;)o(G,n=e[i++])||n==F||n==c||r.push(n);return r},X=function(t){for(var n,e=t===V,r=k(e?R:x(t)),i=[],u=0;r.length>u;)!o(G,n=r[u++])||e&&!o(V,n)||i.push(G[n]);return i};W||(f((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===V&&n.call(R,e),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),J(this,t,S(1,e))};return i&&H&&J(V,t,{configurable:!0,set:n}),$(t)}).prototype,"toString",function(){return this._k}),w.f=Q,P.f=K,e(30).f=j.f=U,e(12).f=Y,e(17).f=X,i&&!e(16)&&f(V,"propertyIsEnumerable",Y,!0),y.f=function(t){return $(v(t))}),u(u.G+u.W+u.F*!W,{Symbol:T});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)v(Z[tt++]);for(var nt=E(v.store),et=0;nt.length>et;)d(nt[et++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=T(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,n){return void 0===n?_(t):q(_(t),n)},defineProperty:K,defineProperties:q,getOwnPropertyDescriptor:Q,getOwnPropertyNames:U,getOwnPropertySymbols:X}),A&&u(u.S+u.F*(!W||a(function(){var t=T();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(g(n)||void 0!==t)&&!z(t))return b(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!z(n))return n}),r[1]=n,C.apply(A,r)}}),T.prototype[N]||e(8)(T.prototype,N,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(62),e(56),e(55),e(54),t.exports=e(0).Symbol},function(t,n,e){t.exports={default:e(63),__esModule:!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=function(){}},function(t,n,e){"use strict";var r=e(66),o=e(65),i=e(26),u=e(5);t.exports=e(38)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){e(67);for(var r=e(1),o=e(8),i=e(26),u=e(4)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){var r=e(2),o=e(20),i=e(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(29),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(5),o=e(72),i=e(71);t.exports=function(t){return function(n,e,u){var f,c=r(n),a=o(c.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){"use strict";var r=e(25),o=e(14),i=e(21),u={};e(8)(u,e(4)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(75);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(29),o=e(28);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c))<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(77)(!0);e(38)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(78),e(68),t.exports=e(19).f("iterator")},function(t,n,e){t.exports={default:e(79),__esModule:!0}},function(t,n,e){"use strict";n.__esModule=!0;var r=u(e(80)),o=u(e(64)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.directive=void 0;var r=c(e(81)),o=c(e(53)),i=c(e(48)),u=c(e(45)),f=c(e(41));function c(t){return t&&t.__esModule?t:{default:t}}n.install=function(t){t.directive("click-outside",h)};var a=(0,f.default)(null),s=(0,f.default)(null),l=[a,s],p=function(t,n,e){var r=e.target,o=function(n){var o=n.el;if(o!==r&&!o.contains(r)){var i=n.binding;i.modifiers.stop&&e.stopPropagation(),i.modifiers.prevent&&e.preventDefault(),i.value.call(t,e)}};(0,u.default)(n).forEach(function(t){return n[t].forEach(o)})},v=function(t){p(this,a,t)},y=function(t){p(this,s,t)},d=function(t){return t?v:y},h=n.directive=(0,i.default)({},{$_captureInstances:{value:a},$_nonCaptureInstances:{value:s},$_onCaptureEvent:{value:v},$_onNonCaptureEvent:{value:y},bind:{value:function(t,n){if("function"!=typeof n.value)throw new TypeError("Binding value must be a function.");var e=n.arg||"click",i=(0,o.default)({},n,{arg:e,modifiers:(0,o.default)({capture:!1,prevent:!1,stop:!1},n.modifiers)}),u=i.modifiers.capture,f=u?a:s;Array.isArray(f[e])||(f[e]=[]),1===f[e].push({el:t,binding:i})&&"object"===("undefined"==typeof document?"undefined":(0,r.default)(document))&&document&&document.addEventListener(e,d(u),u)}},unbind:{value:function(t){var n=function(n){return n.el!==t};l.forEach(function(t){var e=(0,u.default)(t);if(e.length){var o=t===a;e.forEach(function(e){var i=t[e].filter(n);i.length?t[e]=i:("object"===("undefined"==typeof document?"undefined":(0,r.default)(document))&&document&&document.removeEventListener(e,d(o),o),delete t[e])})}})}}})}])});
//# sourceMappingURL=v-click-outside-x.min.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = __webpack_require__(21);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _icon = __webpack_require__(67);

var _icon2 = _interopRequireDefault(_icon);

var _yearTable = __webpack_require__(141);

var _yearTable2 = _interopRequireDefault(_yearTable);

var _monthTable = __webpack_require__(143);

var _monthTable2 = _interopRequireDefault(_monthTable);

var _confirm = __webpack_require__(152);

var _confirm2 = _interopRequireDefault(_confirm);

var _util = __webpack_require__(16);

var _datePanelLabel = __webpack_require__(156);

var _datePanelLabel2 = _interopRequireDefault(_datePanelLabel);

var _panelMixin = __webpack_require__(158);

var _panelMixin2 = _interopRequireDefault(_panelMixin);

var _datePanelMixin = __webpack_require__(159);

var _datePanelMixin2 = _interopRequireDefault(_datePanelMixin);

var _locale = __webpack_require__(29);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = "ivu-picker-panel";
var datePrefixCls = "ivu-date-picker";
var dateSorter = function (a, b) {
  (0, _newArrowCheck3.default)(undefined, undefined);

  if (!a || !b) return 0;
  return a.getTime() - b.getTime();
}.bind(undefined);

exports.default = {
  name: "RangeDatePickerPanel",
  mixins: [_panelMixin2.default, _locale2.default, _datePanelMixin2.default],
  components: { Icon: _icon2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, Confirm: _confirm2.default, datePanelLabel: _datePanelLabel2.default },
  props: {
    splitPanels: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var _this = this;

    var _value$map = this.value.map(function (date) {
      (0, _newArrowCheck3.default)(this, _this);
      return date || (0, _util.initTimeDate)();
    }.bind(this)),
        _value$map2 = (0, _slicedToArray3.default)(_value$map, 2),
        minMonth = _value$map2[0],
        maxMonth = _value$map2[1];

    var leftPanelDate = this.startDate ? this.startDate : minMonth;
    return {
      prefixCls: prefixCls,
      datePrefixCls: datePrefixCls,
      dates: this.value,
      rangeState: {
        from: this.value[0],
        to: this.value[1],
        selecting: minMonth && !maxMonth
      },
      currentView: this.selectionMode || "range",
      leftPickerTable: String(this.selectionMode) + "-table",
      leftPanelDate: leftPanelDate
    };
  },

  computed: {
    classes: function classes() {
      return [prefixCls + "-body-wrapper", datePrefixCls + "-with-monthrange"];
    },
    panelBodyClasses: function panelBodyClasses() {
      return [prefixCls + "-body", (0, _defineProperty3.default)({}, prefixCls + "-body-date", !this.showTime)];
    },
    leftDatePanelLabel: function leftDatePanelLabel() {
      return this.panelLabelConfig("left");
    },
    leftDatePanelView: function leftDatePanelView() {
      return this.leftPickerTable.split("-").shift();
    },
    timeDisabled: function timeDisabled() {
      return !(this.dates[0] && this.dates[1]);
    },
    preSelecting: function preSelecting() {
      var tableType = String(this.currentView) + "-table";
      return {
        left: this.leftPickerTable !== tableType
      };
    },
    panelPickerHandlers: function panelPickerHandlers() {
      return {
        left: this.preSelecting.left ? this.handlePreSelection.bind(this, "left") : this.handleRangePick
      };
    }
  },
  watch: {
    value: function value(newVal) {
      var minMonth = newVal[0] ? (0, _util.toDate)(newVal[0]) : null;
      var maxMonth = newVal[1] ? (0, _util.toDate)(newVal[1]) : null;
      this.dates = [minMonth, maxMonth].sort(dateSorter);
      this.rangeState = {
        from: this.dates[0],
        to: this.dates[1],
        selecting: false
      };
    },
    currentView: function currentView(_currentView) {
      var leftMonth = this.leftPanelDate.getMonth();
      if (_currentView === "month") {
        this.changePanelDate("", "FullYear", 1);
      }
      if (_currentView === "year") {
        this.changePanelDate("", "FullYear", 10);
      }
    },
    selectionMode: function selectionMode(type) {
      this.currentView = type || "range";
    }
  },
  methods: {
    reset: function reset() {
      this.currentView = this.selectionMode;
      this.leftPickerTable = String(this.currentView) + "-table";
    },
    panelLabelConfig: function panelLabelConfig(direction) {
      var _this2 = this;

      var locale = this.t("i.locale");
      var datePanelLabel = this.t("i.datepicker.datePanelLabel");
      var handler = function (type) {
        (0, _newArrowCheck3.default)(this, _this2);

        var fn = type == "month" ? this.showMonthPicker : this.showYearPicker;
        return function () {
          (0, _newArrowCheck3.default)(this, _this2);
          return fn(direction);
        }.bind(this);
      }.bind(this);
      var date = this[String(direction) + "PanelDate"];

      var _formatDateLabels = (0, _util.formatDateLabels)(locale, datePanelLabel, date),
          labels = _formatDateLabels.labels,
          separator = _formatDateLabels.separator;

      return {
        separator: separator,
        labels: labels.map(function (obj) {
          (0, _newArrowCheck3.default)(this, _this2);
          return obj.handler = handler(obj.type), obj;
        }.bind(this))
      };
    },
    prevYear: function prevYear(panel) {
      var increment = this.currentView === "year" ? -10 : -1;
      this.changePanelDate(panel, "FullYear", increment);
    },
    nextYear: function nextYear(panel) {
      var increment = this.currentView === "year" ? 10 : 1;
      this.changePanelDate(panel, "FullYear", increment);
    },
    changePanelDate: function changePanelDate(panel, type, increment) {
      var updateOtherPanel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var current = new Date(this[String(panel) + "PanelDate"]);
      current["set" + String(type)](current["get" + String(type)]() + increment);
      this[String(panel) + "PanelDate"] = current;
      if (!updateOtherPanel) return;

      if (!this.splitPanels) {
        var otherPanel = panel === "left" ? "right" : "left";
        var otherCurrent = new Date(this[otherPanel + "PanelDate"]);
        otherCurrent["set" + String(type)](otherCurrent["get" + String(type)]() + increment);
        this[otherPanel + "PanelDate"] = otherCurrent;
      }
    },
    showYearPicker: function showYearPicker(panel) {
      this[String(panel) + "PickerTable"] = "year-table";
    },
    showMonthPicker: function showMonthPicker(panel) {
      this[String(panel) + "PickerTable"] = "month-table";
    },
    handlePreSelection: function handlePreSelection(panel, value) {
      this[String(panel) + "PanelDate"] = value;
      var currentViewType = this[String(panel) + "PickerTable"];
      if (currentViewType === "year-table") {
        this[String(panel) + "PickerTable"] = "month-table";
      }
      if (!this.splitPanels) {
        var otherPanel = panel === "left" ? "right" : "left";
        this[otherPanel + "PanelDate"] = value;
        this.changePanelDate(otherPanel, "Month", 1, false);
      }
    },
    handleRangePick: function handleRangePick(val, type) {
      if (this.rangeState.selecting) {
        var _sort = [this.rangeState.from, val].sort(dateSorter),
            _sort2 = (0, _slicedToArray3.default)(_sort, 2),
            minMonth = _sort2[0],
            maxMonth = _sort2[1];

        this.dates = [minMonth, maxMonth];
        this.rangeState = {
          from: minMonth,
          to: maxMonth,
          selecting: false
        };
        this.handleConfirm(false, type || "date");
      } else {
        this.rangeState = {
          from: val,
          to: null,
          selecting: true
        };
      }
    },
    handleChangeRange: function handleChangeRange(val) {
      this.rangeState.to = val;
    }
  }
};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_cebe1b28_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_cebe1b28_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_cebe1b28_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_cebe1b28_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_cebe1b28_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-icon';

exports.default = {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: [Number, String],
        color: String,
        custom: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.type), this.type !== ''), (0, _defineProperty3.default)(_ref, '' + String(this.custom), this.custom !== ''), _ref)];
        },
        styles: function styles() {
            var style = {};

            if (this.size) {
                style['font-size'] = String(this.size) + 'px';
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _util = __webpack_require__(16);

var _assist = __webpack_require__(5);

var _mixin = __webpack_require__(70);

var _mixin2 = _interopRequireDefault(_mixin);

var _prefixCls = __webpack_require__(71);

var _prefixCls2 = _interopRequireDefault(_prefixCls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_mixin2.default],
    props: {},
    computed: {
        classes: function classes() {
            return ['' + String(_prefixCls2.default), String(_prefixCls2.default) + '-year'];
        },
        startYear: function startYear() {
            return Math.floor(this.tableDate.getFullYear() / 10) * 10;
        },
        cells: function cells() {
            var _this = this;

            var cells = [];
            var cell_tmpl = {
                text: '',
                selected: false,
                disabled: false
            };

            var selectedDays = this.dates.filter(Boolean).map(function (date) {
                (0, _newArrowCheck3.default)(this, _this);
                return (0, _util.clearHours)(new Date(date.getFullYear(), 0, 1));
            }.bind(this));
            var focusedDate = (0, _util.clearHours)(new Date(this.focusedDate.getFullYear(), 0, 1));

            for (var i = 0; i < 10; i++) {
                var cell = (0, _assist.deepCopy)(cell_tmpl);
                cell.date = new Date(this.startYear + i, 0, 1);
                cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'year';
                var day = (0, _util.clearHours)(cell.date);
                cell.selected = selectedDays.includes(day);
                cell.focused = day === focusedDate;
                cells.push(cell);
            }

            return cells;
        }
    },
    methods: {
        getCellCls: function getCellCls(cell) {
            var _ref;

            return [String(_prefixCls2.default) + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-disabled', cell.disabled), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-focused', cell.focused), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-range', cell.range && !cell.start && !cell.end), _ref)];
        }
    }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _util = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'PanelTable',
    props: {
        tableDate: {
            type: Date,
            required: true
        },
        disabledDate: {
            type: Function
        },
        selectionMode: {
            type: String,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        rangeState: {
            type: Object,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {
                    from: null,
                    to: null,
                    selecting: false
                };
            }.bind(undefined)
        },
        focusedDate: {
            type: Date,
            required: true
        }
    },
    computed: {
        dates: function dates() {
            var selectionMode = this.selectionMode,
                value = this.value,
                rangeState = this.rangeState;

            var rangeSelecting = selectionMode === 'range' && rangeState.selecting;
            return rangeSelecting ? [rangeState.from] : value;
        }
    },
    methods: {
        handleClick: function handleClick(cell) {
            if (cell.disabled || cell.type === 'month') return;
            var newDate = new Date((0, _util.clearHours)(cell.date));

            this.$emit('on-pick', newDate);
            this.$emit('on-pick-click');
        },
        handleMouseMove: function handleMouseMove(cell) {
            if (!this.rangeState.selecting) return;
            if (cell.disabled) return;
            var newDate = cell.date;
            this.$emit('on-change-range', newDate);
        }
    }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'ivu-date-picker-cells';

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _slicedToArray2 = __webpack_require__(21);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _util = __webpack_require__(16);

var _assist = __webpack_require__(5);

var _locale = __webpack_require__(29);

var _locale2 = _interopRequireDefault(_locale);

var _mixin = __webpack_require__(70);

var _mixin2 = _interopRequireDefault(_mixin);

var _prefixCls = __webpack_require__(71);

var _prefixCls2 = _interopRequireDefault(_prefixCls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_locale2.default, _mixin2.default],
    props: {},
    data: function data() {
        var _this = this;

        var _value$map = this.value.map(function (month) {
            (0, _newArrowCheck3.default)(this, _this);
            return month;
        }.bind(this)),
            _value$map2 = (0, _slicedToArray3.default)(_value$map, 2),
            minMonth = _value$map2[0],
            maxMonth = _value$map2[1];

        return {};
    },

    computed: {
        classes: function classes() {
            return ['' + String(_prefixCls2.default), String(_prefixCls2.default) + '-month'];
        },
        cells: function cells() {
            var _this2 = this;

            var cells = [];
            var cell_tmpl = {
                text: '',
                selected: false
            };

            var tableYear = this.tableDate.getFullYear();
            var selectedDays = this.dates.filter(Boolean).map(function (date) {
                (0, _newArrowCheck3.default)(this, _this2);
                return (0, _util.clearHours)(new Date(date.getFullYear(), date.getMonth(), 1));
            }.bind(this));

            var _dates$map = this.dates.map(_util.clearHours),
                _dates$map2 = (0, _slicedToArray3.default)(_dates$map, 2),
                minMonth = _dates$map2[0],
                maxMonth = _dates$map2[1];

            var focusedDate = (0, _util.clearHours)(new Date(this.focusedDate.getFullYear(), this.focusedDate.getMonth(), 1));

            var rangeStart = this.rangeState.from && (0, _util.clearHours)(this.rangeState.from);
            var rangeEnd = this.rangeState.to && (0, _util.clearHours)(this.rangeState.to);

            for (var i = 0; i < 12; i++) {
                var cell = (0, _assist.deepCopy)(cell_tmpl);
                cell.date = new Date(tableYear, i, 1);
                cell.text = this.tCell(i + 1);
                var day = (0, _util.clearHours)(cell.date);
                var month = (0, _util.clearHours)(cell.text);

                cell.start = day === minMonth;
                cell.end = day === maxMonth;

                cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date.getFullYear(), cell.date.getMonth() + 1);
                cell.selected = selectedDays.includes(day);
                cell.focused = month === focusedDate;
                cell.range = (0, _util.isInRange)(cell.date, rangeStart, rangeEnd);
                cells.push(cell);
            }

            return cells;
        }
    },
    methods: {
        getCellCls: function getCellCls(cell) {
            var _ref;

            return [String(_prefixCls2.default) + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-selected', cell.selected && !cell.disabled), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-disabled', cell.disabled), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-focused', (0, _util.clearHours)(cell.date) === (0, _util.clearHours)(this.focusedDate) && !cell.disabled), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-range', cell.range && !cell.start && !cell.end && !cell.disabled), _ref)];
        },
        tCell: function tCell(nr) {
            return this.t('i.datepicker.months.m' + String(nr));
        }
    }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.i18n = exports.use = exports.t = undefined;

var _getPrototypeOf = __webpack_require__(144);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _zhCN = __webpack_require__(147);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _vue = __webpack_require__(27);

var _vue2 = _interopRequireDefault(_vue);

var _deepmerge = __webpack_require__(149);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _format = __webpack_require__(150);

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = (0, _format2.default)(_vue2.default);
var lang = _zhCN2.default;
var merged = false;
var i18nHandler = function i18nHandler() {
    var vuei18n = (0, _getPrototypeOf2.default)(this || _vue2.default).$t;
    if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
        if (!merged) {
            merged = true;
            _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
        }
        return vuei18n.apply(this, arguments);
    }
};

var t = exports.t = function t(path, options) {
    var value = i18nHandler.apply(this, arguments);
    if (value !== null && value !== undefined) return value;

    var array = path.split('.');
    var current = lang;

    for (var i = 0, j = array.length; i < j; i++) {
        var property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
    }
    return '';
};

var use = exports.use = function use(l) {
    lang = l || lang;
};

var i18n = exports.i18n = function i18n(fn) {
    i18nHandler = fn || i18nHandler;
};

exports.default = { use: use, t: t, i18n: i18n };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(26);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _button = __webpack_require__(153);

var _button2 = _interopRequireDefault(_button);

var _locale = __webpack_require__(29);

var _locale2 = _interopRequireDefault(_locale);

var _emitter = __webpack_require__(28);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker';

exports.default = {
    mixins: [_locale2.default, _emitter2.default],
    components: { iButton: _button2.default },
    props: {
        showTime: false,
        isTime: false,
        timeDisabled: false
    },
    data: function data() {
        return {
            prefixCls: prefixCls
        };
    },

    computed: {
        timeClasses: function timeClasses() {
            return prefixCls + '-confirm-time';
        },
        labels: function labels() {
            var _this = this;

            var labels = ['time', 'clear', 'ok'];
            var values = [this.isTime ? 'selectDate' : 'selectTime', 'clear', 'ok'];
            return labels.reduce(function (obj, key, i) {
                (0, _newArrowCheck3.default)(this, _this);

                obj[key] = this.t('i.datepicker.' + values[i]);
                return obj;
            }.bind(this), {});
        }
    },
    methods: {
        handleClear: function handleClear() {
            this.$emit('on-pick-clear');
        },
        handleSuccess: function handleSuccess() {
            this.$emit('on-pick-success');
        },
        handleToggleTime: function handleToggleTime() {
            if (this.timeDisabled) return;
            this.$emit('on-pick-toggle-time');
            this.dispatch('CalendarPicker', 'focus-input');
        },
        handleTab: function handleTab(e) {
            var tabbables = [].concat((0, _toConsumableArray3.default)(this.$el.children));
            var expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']();

            if (document.activeElement === expectedFocus) {
                e.preventDefault();
                e.stopPropagation();
                this.dispatch('CalendarPicker', 'focus-input');
            }
        }
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _icon = __webpack_require__(76);

var _icon2 = _interopRequireDefault(_icon);

var _assist = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-btn';

exports.default = {
    name: 'Button',
    components: { Icon: _icon2.default },
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
            },

            default: 'default'
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        loading: Boolean,
        disabled: Boolean,
        htmlType: {
            default: 'button',
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['button', 'submit', 'reset']);
            }
        },
        icon: {
            type: String,
            default: ''
        },
        customIcon: {
            type: String,
            default: ''
        },
        long: {
            type: Boolean,
            default: false
        },
        ghost: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showSlot: true
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, prefixCls + '-' + String(this.type), (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-long', this.long), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.shape), !!this.shape), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), this.size !== 'default'), (0, _defineProperty3.default)(_ref, prefixCls + '-loading', this.loading != null && this.loading), (0, _defineProperty3.default)(_ref, prefixCls + '-icon-only', !this.showSlot && (!!this.icon || !!this.customIcon || this.loading)), (0, _defineProperty3.default)(_ref, prefixCls + '-ghost', this.ghost), _ref)];
        }
    },
    methods: {
        handleClickLink: function handleClickLink(event) {
            var new_window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.$emit('click', event);

            this.handleCheckClick(event, new_window);
        }
    },
    mounted: function mounted() {
        this.showSlot = this.$slots.default !== undefined;
    }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(67);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        datePanelLabel: Object,
        currentView: String,
        datePrefixCls: String
    }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(57);

var _stringify2 = _interopRequireDefault(_stringify);

var _isFinite = __webpack_require__(164);

var _isFinite2 = _interopRequireDefault(_isFinite);

var _getIterator2 = __webpack_require__(60);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(21);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(49);

var _extends4 = _interopRequireDefault(_extends3);

var _toConsumableArray2 = __webpack_require__(26);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _dropdown = __webpack_require__(63);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _vClickOutsideX = __webpack_require__(65);

var _assist = __webpack_require__(5);

var _emitter = __webpack_require__(28);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(29);

var _locale2 = _interopRequireDefault(_locale);

var _functionalOptions = __webpack_require__(167);

var _functionalOptions2 = _interopRequireDefault(_functionalOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-select';
var optionRegexp = /^i-option$|^Option$/i;
var optionGroupRegexp = /option-?group/i;

var findChild = function (instance, checkFn) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var match = checkFn(instance);
    if (match) return instance;
    for (var i = 0, l = instance.$children.length; i < l; i++) {
        var child = instance.$children[i];
        match = findChild(child, checkFn);
        if (match) return match;
    }
}.bind(undefined);

var findOptionsInVNode = function (node) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var opts = node.componentOptions;
    if (opts && opts.tag.match(optionRegexp)) return [node];
    if (!node.children && (!opts || !opts.children)) return [];
    var children = [].concat((0, _toConsumableArray3.default)(node.children || []), (0, _toConsumableArray3.default)(opts && opts.children || []));
    var options = children.reduce(function (arr, el) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return [].concat((0, _toConsumableArray3.default)(arr), (0, _toConsumableArray3.default)(findOptionsInVNode(el)));
    }.bind(undefined), []).filter(Boolean);
    return options.length > 0 ? options : [];
}.bind(undefined);

var extractOptions = function (options) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return options.reduce(function (options, slotEntry) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        return options.concat(findOptionsInVNode(slotEntry));
    }.bind(undefined), []);
}.bind(undefined);

var applyProp = function (node, propName, value) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    return (0, _extends4.default)({}, node, {
        componentOptions: (0, _extends4.default)({}, node.componentOptions, {
            propsData: (0, _extends4.default)({}, node.componentOptions.propsData, (0, _defineProperty3.default)({}, propName, value))
        })
    });
}.bind(undefined);

var getNestedProperty = function (obj, path) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var keys = path.split('.');
    return keys.reduce(function (o, key) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return o && o[key] || null;
    }.bind(undefined), obj);
}.bind(undefined);

var getOptionLabel = function (option) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (option.componentOptions.propsData.label) return option.componentOptions.propsData.label;
    var textContent = (option.componentOptions.children || []).reduce(function (str, child) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return str + (child.text || '');
    }.bind(undefined), '');
    var innerHTML = getNestedProperty(option, 'data.domProps.innerHTML');
    return textContent || (typeof innerHTML === 'string' ? innerHTML : '');
}.bind(undefined);

var ANIMATION_TIMEOUT = 300;

exports.default = {
    name: 'iSelect',
    mixins: [_emitter2.default, _locale2.default],
    components: { FunctionalOptions: _functionalOptions2.default, Drop: _dropdown2.default },
    directives: { clickOutside: _vClickOutsideX.directive },
    props: {
        value: {
            type: [String, Number, Array],
            default: ''
        },

        label: {
            type: [String, Number, Array],
            default: ''
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String
        },
        filterable: {
            type: Boolean,
            default: false
        },
        filterMethod: {
            type: Function
        },
        remoteMethod: {
            type: Function
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingText: {
            type: String
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        labelInValue: {
            type: Boolean,
            default: false
        },
        notFoundText: {
            type: String
        },
        placement: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['top', 'bottom']);
            },

            default: 'bottom'
        },

        autoComplete: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        elementId: {
            type: String
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on('on-select-selected', this.onOptionClick);

        if (!this.remote && this.selectOptions.length > 0) {
            this.values = this.getInitialValue().map(function (value) {
                (0, _newArrowCheck3.default)(this, _this);

                if (typeof value !== 'number' && !value) return null;
                return this.getOptionData(value);
            }.bind(this)).filter(Boolean);
        }

        this.checkUpdateStatus();
    },
    data: function data() {

        return {
            prefixCls: prefixCls,
            values: [],
            dropDownWidth: 0,
            visible: false,
            focusIndex: -1,
            isFocused: false,
            query: '',
            initialLabel: this.label,
            hasMouseHoverHead: false,
            slotOptions: this.$slots.default,
            caretPosition: -1,
            lastRemoteQuery: '',
            unchangedQuery: true,
            hasExpectedValue: false,
            preventRemoteCall: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-visible', this.visible), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-multiple', this.multiple), (0, _defineProperty3.default)(_ref, prefixCls + '-single', !this.multiple), (0, _defineProperty3.default)(_ref, prefixCls + '-show-clear', this.showCloseIcon), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), !!this.size), _ref)];
        },
        dropdownCls: function dropdownCls() {
            return (0, _defineProperty3.default)({}, 'ivu-auto-complete', this.autoComplete);
        },
        selectionCls: function selectionCls() {
            var _ref3;

            return _ref3 = {}, (0, _defineProperty3.default)(_ref3, prefixCls + '-selection', !this.autoComplete), (0, _defineProperty3.default)(_ref3, prefixCls + '-selection-focused', this.isFocused), _ref3;
        },
        queryStringMatchesSelectedOption: function queryStringMatchesSelectedOption() {
            var _this2 = this;

            var selectedOptions = this.values[0];
            if (!selectedOptions) return false;

            var _map = [this.query, selectedOptions.label].map(function (str) {
                (0, _newArrowCheck3.default)(this, _this2);
                return (str || '').trim();
            }.bind(this)),
                _map2 = (0, _slicedToArray3.default)(_map, 2),
                query = _map2[0],
                label = _map2[1];

            return !this.multiple && this.unchangedQuery && query === label;
        },
        localeNotFoundText: function localeNotFoundText() {
            if (typeof this.notFoundText === 'undefined') {
                return this.t('i.select.noMatch');
            } else {
                return this.notFoundText;
            }
        },
        localeLoadingText: function localeLoadingText() {
            if (typeof this.loadingText === 'undefined') {
                return this.t('i.select.loading');
            } else {
                return this.loadingText;
            }
        },
        transitionName: function transitionName() {
            return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
        },
        dropVisible: function dropVisible() {
            var status = true;
            var noOptions = !this.selectOptions || this.selectOptions.length === 0;
            if (!this.loading && this.remote && this.query === '' && noOptions) status = false;

            if (this.autoComplete && noOptions) status = false;

            return this.visible && status;
        },
        showNotFoundLabel: function showNotFoundLabel() {
            var loading = this.loading,
                remote = this.remote,
                selectOptions = this.selectOptions;

            return selectOptions && selectOptions.length === 0 && (!remote || remote && !loading);
        },
        publicValue: function publicValue() {
            var _this3 = this;

            if (this.labelInValue) {
                return this.multiple ? this.values : this.values[0];
            } else {
                return this.multiple ? this.values.map(function (option) {
                    (0, _newArrowCheck3.default)(this, _this3);
                    return option.value;
                }.bind(this)) : (this.values[0] || {}).value;
            }
        },
        canBeCleared: function canBeCleared() {
            var uiStateMatch = this.hasMouseHoverHead || this.active;
            var qualifiesForClear = !this.multiple && this.clearable;
            return uiStateMatch && qualifiesForClear && this.reset;
        },
        selectOptions: function selectOptions() {
            var _this4 = this;

            var selectOptions = [];
            var slotOptions = this.slotOptions || [];
            var optionCounter = -1;
            var currentIndex = this.focusIndex;
            var selectedValues = this.values.filter(Boolean).map(function (_ref4) {
                var value = _ref4.value;
                (0, _newArrowCheck3.default)(this, _this4);
                return value;
            }.bind(this));
            if (this.autoComplete) {
                var copyChildren = function (node, fn) {
                    (0, _newArrowCheck3.default)(this, _this4);

                    return (0, _extends4.default)({}, node, {
                        children: (node.children || []).map(fn).map(function (child) {
                            (0, _newArrowCheck3.default)(this, _this4);
                            return copyChildren(child, fn);
                        }.bind(this))
                    });
                }.bind(this);
                var autoCompleteOptions = extractOptions(slotOptions);
                var selectedSlotOption = autoCompleteOptions[currentIndex];

                return slotOptions.map(function (node) {
                    (0, _newArrowCheck3.default)(this, _this4);

                    if (node === selectedSlotOption || getNestedProperty(node, 'componentOptions.propsData.value') === this.value) return applyProp(node, 'isFocused', true);
                    return copyChildren(node, function (child) {
                        (0, _newArrowCheck3.default)(this, _this4);

                        if (child !== selectedSlotOption) return child;
                        return applyProp(child, 'isFocused', true);
                    }.bind(this));
                }.bind(this));
            }
            var hasDefaultSelected = slotOptions.some(function (option) {
                (0, _newArrowCheck3.default)(this, _this4);
                return this.query === option.key;
            }.bind(this));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(slotOptions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;


                    var cOptions = option.componentOptions;
                    if (!cOptions) continue;
                    if (cOptions.tag.match(optionGroupRegexp)) {
                        var children = cOptions.children;

                        if (this.filterable) {
                            children = children.filter(function (_ref5) {
                                var componentOptions = _ref5.componentOptions;
                                (0, _newArrowCheck3.default)(this, _this4);
                                return this.validateOption(componentOptions);
                            }.bind(this));
                        }

                        cOptions.children = children.map(function (opt) {
                            (0, _newArrowCheck3.default)(this, _this4);

                            optionCounter = optionCounter + 1;
                            return this.processOption(opt, selectedValues, optionCounter === currentIndex);
                        }.bind(this));

                        if (cOptions.children.length > 0) selectOptions.push((0, _extends4.default)({}, option));
                    } else {
                        if (!hasDefaultSelected) {
                            var optionPassesFilter = this.filterable ? this.validateOption(cOptions) : option;
                            if (!optionPassesFilter) continue;
                        }

                        optionCounter = optionCounter + 1;
                        selectOptions.push(this.processOption(option, selectedValues, optionCounter === currentIndex));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return selectOptions;
        },
        flatOptions: function flatOptions() {
            return extractOptions(this.selectOptions);
        },
        selectTabindex: function selectTabindex() {
            return this.disabled || this.filterable ? -1 : 0;
        },
        remote: function remote() {
            return typeof this.remoteMethod === 'function';
        }
    },
    methods: {
        setQuery: function setQuery(query) {
            if (query) {
                this.onQueryChange(query);
                return;
            }
            if (query === null) {
                this.onQueryChange('');
                this.values = [];
            }
        },
        clearSingleSelect: function clearSingleSelect() {
            this.$emit('on-clear');
            this.hideMenu();
            if (this.clearable) this.reset();
        },
        getOptionData: function getOptionData(value) {
            var _this5 = this;

            var option = this.flatOptions.find(function (_ref6) {
                var componentOptions = _ref6.componentOptions;
                (0, _newArrowCheck3.default)(this, _this5);
                return componentOptions.propsData.value === value;
            }.bind(this));
            if (!option) return null;
            var label = getOptionLabel(option);
            return {
                value: value,
                label: label
            };
        },
        getInitialValue: function getInitialValue() {
            var _this6 = this;

            var multiple = this.multiple,
                remote = this.remote,
                value = this.value;

            var initialValue = Array.isArray(value) ? value : [value];
            if (!multiple && (typeof initialValue[0] === 'undefined' || String(initialValue[0]).trim() === '' && !(0, _isFinite2.default)(initialValue[0]))) initialValue = [];
            if (remote && !multiple && value) {
                var data = this.getOptionData(value);
                this.query = data ? data.label : String(value);
            }
            return initialValue.filter(function (item) {
                (0, _newArrowCheck3.default)(this, _this6);

                return Boolean(item) || item === 0;
            }.bind(this));
        },
        processOption: function processOption(option, values, isFocused) {
            if (!option.componentOptions) return option;
            var optionValue = option.componentOptions.propsData.value;
            var disabled = option.componentOptions.propsData.disabled;
            var isSelected = values.includes(optionValue);

            var propsData = (0, _extends4.default)({}, option.componentOptions.propsData, {
                selected: isSelected,
                isFocused: isFocused,
                disabled: typeof disabled === 'undefined' ? false : disabled !== false
            });

            return (0, _extends4.default)({}, option, {
                componentOptions: (0, _extends4.default)({}, option.componentOptions, {
                    propsData: propsData
                })
            });
        },
        validateOption: function validateOption(_ref7) {
            var _this7 = this;

            var children = _ref7.children,
                elm = _ref7.elm,
                propsData = _ref7.propsData;

            if (this.queryStringMatchesSelectedOption) return true;

            var value = propsData.value;
            var label = propsData.label || '';
            var textContent = elm && elm.textContent || (children || []).reduce(function (str, node) {
                (0, _newArrowCheck3.default)(this, _this7);

                var nodeText = node.elm ? node.elm.textContent : node.text;
                return String(str) + ' ' + String(nodeText);
            }.bind(this), '') || '';
            var stringValues = (0, _stringify2.default)([value, label, textContent]);
            var query = this.query.toLowerCase().trim();
            return stringValues.toLowerCase().includes(query);
        },
        toggleMenu: function toggleMenu(e, force) {
            if (this.disabled) {
                return false;
            }

            this.visible = typeof force !== 'undefined' ? force : !this.visible;
            if (this.visible) {
                this.dropDownWidth = this.$el.getBoundingClientRect().width;
                this.broadcast('Drop', 'on-update-popper');
            }
        },
        hideMenu: function hideMenu() {
            var _this8 = this;

            this.toggleMenu(null, false);
            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this8);
                return this.unchangedQuery = true;
            }.bind(this), ANIMATION_TIMEOUT);
        },
        onClickOutside: function onClickOutside(event) {
            var _this9 = this;

            if (this.visible) {
                if (event.type === 'mousedown') {
                    event.preventDefault();
                    return;
                }

                if (this.filterable) {
                    var input = this.$el.querySelector('input[type="text"]');
                    this.caretPosition = input.selectionStart;
                    this.$nextTick(function () {
                        (0, _newArrowCheck3.default)(this, _this9);

                        var caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition;
                        input.setSelectionRange(caretPosition, caretPosition);
                    }.bind(this));
                }

                if (!this.autoComplete) event.stopPropagation();
                event.preventDefault();
                this.hideMenu();
                this.isFocused = true;
            } else {
                this.caretPosition = -1;
                this.isFocused = false;
            }
        },
        reset: function reset() {
            this.query = '';
            this.focusIndex = -1;
            this.unchangedQuery = true;
            this.values = [];
        },
        handleKeydown: function handleKeydown(e) {
            if (e.key === 'Backspace') {
                return;
            }

            if (this.visible) {
                e.preventDefault();
                if (e.key === 'Tab') {
                    e.stopPropagation();
                }

                if (e.key === 'Escape') {
                    e.stopPropagation();
                    this.hideMenu();
                }

                if (e.key === 'ArrowUp') {
                    this.navigateOptions(-1);
                }

                if (e.key === 'ArrowDown') {
                    this.navigateOptions(1);
                }

                if (e.key === 'Enter') {
                    if (this.focusIndex === -1) return this.hideMenu();
                    var optionComponent = this.flatOptions[this.focusIndex];
                    var option = this.getOptionData(optionComponent.componentOptions.propsData.value);
                    this.onOptionClick(option);
                }
            } else {
                var keysThatCanOpenSelect = ['ArrowUp', 'ArrowDown'];
                if (keysThatCanOpenSelect.includes(e.key)) this.toggleMenu(null, true);
            }
        },
        navigateOptions: function navigateOptions(direction) {
            var optionsLength = this.flatOptions.length - 1;

            var index = this.focusIndex + direction;
            if (index < 0) index = optionsLength;
            if (index > optionsLength) index = 0;

            if (direction > 0) {
                var nearestActiveOption = -1;
                for (var i = 0; i < this.flatOptions.length; i++) {
                    var optionIsActive = !this.flatOptions[i].componentOptions.propsData.disabled;
                    if (optionIsActive) nearestActiveOption = i;
                    if (nearestActiveOption >= index) break;
                }
                index = nearestActiveOption;
            } else {
                var _nearestActiveOption = this.flatOptions.length;
                for (var _i = optionsLength; _i >= 0; _i--) {
                    var _optionIsActive = !this.flatOptions[_i].componentOptions.propsData.disabled;
                    if (_optionIsActive) _nearestActiveOption = _i;
                    if (_nearestActiveOption <= index) break;
                }
                index = _nearestActiveOption;
            }

            this.focusIndex = index;
        },
        onOptionClick: function onOptionClick(option) {
            var _this10 = this;

            if (this.multiple) {
                if (this.remote) this.lastRemoteQuery = this.lastRemoteQuery || this.query;else this.lastRemoteQuery = '';

                var valueIsSelected = this.values.find(function (_ref8) {
                    var value = _ref8.value;
                    (0, _newArrowCheck3.default)(this, _this10);
                    return value === option.value;
                }.bind(this));
                if (valueIsSelected) {
                    this.values = this.values.filter(function (_ref9) {
                        var value = _ref9.value;
                        (0, _newArrowCheck3.default)(this, _this10);
                        return value !== option.value;
                    }.bind(this));
                } else {
                    this.values = this.values.concat(option);
                }

                this.isFocused = true;
            } else {
                this.query = String(option.label).trim();
                this.values = [option];
                this.lastRemoteQuery = '';
                this.hideMenu();
            }

            this.focusIndex = this.flatOptions.findIndex(function (opt) {
                (0, _newArrowCheck3.default)(this, _this10);

                if (!opt || !opt.componentOptions) return false;
                return opt.componentOptions.propsData.value === option.value;
            }.bind(this));

            if (this.filterable) {
                var inputField = this.$el.querySelector('input[type="text"]');
                if (!this.autoComplete) this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this10);
                    return inputField.focus();
                }.bind(this));
            }
            this.broadcast('Drop', 'on-update-popper');
        },
        onQueryChange: function onQueryChange(query) {
            if (query.length > 0 && query !== this.query) this.visible = true;
            this.query = query;
            this.unchangedQuery = this.visible;
        },
        toggleHeaderFocus: function toggleHeaderFocus(_ref10) {
            var type = _ref10.type;

            if (this.disabled) {
                return;
            }
            this.isFocused = type === 'focus';
        },
        updateSlotOptions: function updateSlotOptions() {
            this.slotOptions = this.$slots.default;
        },
        checkUpdateStatus: function checkUpdateStatus() {
            if (this.getInitialValue().length > 0 && this.selectOptions.length === 0) {
                this.hasExpectedValue = true;
            }
        }
    },
    watch: {
        value: function value(_value) {
            var _this11 = this;

            var getInitialValue = this.getInitialValue,
                getOptionData = this.getOptionData,
                publicValue = this.publicValue;


            this.checkUpdateStatus();

            if (_value === '') this.values = [];else if ((0, _stringify2.default)(_value) !== (0, _stringify2.default)(publicValue)) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this11);
                    return this.values = getInitialValue().map(getOptionData).filter(Boolean);
                }.bind(this));
            }
        },
        values: function values(now, before) {
            var _this12 = this;

            var newValue = (0, _stringify2.default)(now);
            var oldValue = (0, _stringify2.default)(before);

            var vModelValue = this.publicValue && this.labelInValue ? this.multiple ? this.publicValue.map(function (_ref11) {
                var value = _ref11.value;
                (0, _newArrowCheck3.default)(this, _this12);
                return value;
            }.bind(this)) : this.publicValue.value : this.publicValue;
            var shouldEmitInput = newValue !== oldValue && vModelValue !== this.value;
            if (shouldEmitInput) {
                this.$emit('input', vModelValue);
                this.$emit('on-change', this.publicValue);
                this.dispatch('FormItem', 'on-form-change', this.publicValue);
            }
        },
        query: function query(_query) {
            var _this13 = this;

            this.$emit('on-query-change', _query);
            var remoteMethod = this.remoteMethod,
                lastRemoteQuery = this.lastRemoteQuery;

            var hasValidQuery = _query !== '' && (_query !== lastRemoteQuery || !lastRemoteQuery);
            var shouldCallRemoteMethod = remoteMethod && hasValidQuery && !this.preventRemoteCall;
            this.preventRemoteCall = false;

            if (shouldCallRemoteMethod) {
                this.focusIndex = -1;
                var promise = this.remoteMethod(_query);
                this.initialLabel = '';
                if (promise && promise.then) {
                    promise.then(function (options) {
                        (0, _newArrowCheck3.default)(this, _this13);

                        if (options) this.options = options;
                    }.bind(this));
                }
            }
            if (_query !== '' && this.remote) this.lastRemoteQuery = _query;
        },
        loading: function loading(state) {
            if (state === false) {
                this.updateSlotOptions();
            }
        },
        isFocused: function isFocused(focused) {
            var el = this.filterable ? this.$el.querySelector('input[type="text"]') : this.$el;
            el[this.isFocused ? 'focus' : 'blur']();

            var _values = (0, _slicedToArray3.default)(this.values, 1),
                selectedOption = _values[0];

            if (selectedOption && this.filterable && !this.multiple && !focused) {
                var selectedLabel = String(selectedOption.label || selectedOption.value).trim();
                if (selectedLabel && this.query !== selectedLabel) {
                    this.preventRemoteCall = true;
                    this.query = selectedLabel;
                }
            }
        },
        focusIndex: function focusIndex(index) {
            var _this14 = this;

            if (index < 0 || this.autoComplete) return;

            var optionValue = this.flatOptions[index].componentOptions.propsData.value;
            var optionInstance = findChild(this, function (_ref12) {
                var $options = _ref12.$options;
                (0, _newArrowCheck3.default)(this, _this14);

                return $options.componentName === 'select-item' && $options.propsData.value === optionValue;
            }.bind(this));

            var bottomOverflowDistance = optionInstance.$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
            var topOverflowDistance = optionInstance.$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;
            if (bottomOverflowDistance > 0) {
                this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
            }
            if (topOverflowDistance < 0) {
                this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
            }
        },
        dropVisible: function dropVisible(open) {
            this.broadcast('Drop', open ? 'on-update-popper' : 'on-destroy-popper');
        },
        selectOptions: function selectOptions() {
            if (this.hasExpectedValue && this.selectOptions.length > 0) {
                if (this.values.length === 0) {
                    this.values = this.getInitialValue();
                }
                this.values = this.values.map(this.getOptionData).filter(Boolean);
                this.hasExpectedValue = false;
            }

            if (this.slotOptions && this.slotOptions.length === 0) {
                this.query = '';
            }
        },
        visible: function visible(state) {
            this.$emit('on-open-change', state);
        }
    }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var returnArrayFn = function () {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return [];
}.bind(undefined);

exports.default = {
    props: {
        options: {
            type: Array,
            default: returnArrayFn
        },
        slotOptions: {
            type: Array,
            default: returnArrayFn
        },
        slotUpdateHook: {
            type: Function,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
            }.bind(undefined)
        }
    },
    functional: true,
    render: function render(h, _ref) {
        var props = _ref.props,
            parent = _ref.parent;

        if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook();
        return props.options;
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _keys = __webpack_require__(81);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(49);

var _extends3 = _interopRequireDefault(_extends2);

var _datePicker = __webpack_require__(91);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _icon = __webpack_require__(76);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(161);

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(162);

var _select2 = _interopRequireDefault(_select);

var _index = __webpack_require__(73);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
    MonthRangeDatePicker: _datePicker2.default,
    Icon: _icon2.default,
    Input: _input2.default,
    Select: _select2.default
};

var iview = (0, _extends3.default)({}, components, {
    iInput: _input2.default,
    iSelect: _select2.default
});

var install = function install(Vue) {
    var _this = this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) return;
    _index2.default.use(opts.locale);
    _index2.default.i18n(opts.i18n);

    (0, _keys2.default)(iview).forEach(function (key) {
        (0, _newArrowCheck3.default)(this, _this);

        Vue.component(key, iview[key]);
    }.bind(this));

    Vue.prototype.$IVIEW = {
        size: opts.size || ''
    };
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

var API = (0, _extends3.default)({
    version: '1.0.9',
    locale: _index2.default.use,
    i18n: _index2.default.i18n,
    install: install
}, components);

API.lang = function (code) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) _index2.default.use(langObject);else console.log('The ' + String(code) + ' language pack is not loaded.');
}.bind(undefined);

module.exports.default = module.exports = API;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(17);
var $keys = __webpack_require__(18);

__webpack_require__(45)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(44);
var toAbsoluteIndex = __webpack_require__(85);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(90) });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(17);
var IObject = __webpack_require__(43);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(14)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = __webpack_require__(92);

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _datePicker2.default;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _picker = __webpack_require__(93);

var _picker2 = _interopRequireDefault(_picker);

var _dateRange = __webpack_require__(139);

var _dateRange2 = _interopRequireDefault(_dateRange);

var _assist = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'CalendarPicker',
    mixins: [_picker2.default],
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['year', 'month', 'date', 'daterange']);
            },

            default: 'month'
        }
    },
    components: { RangeDatePickerPanel: _dateRange2.default },
    computed: {
        panel: function panel() {
            var isRange = this.type === 'daterange';
            return isRange ? 'RangeDatePickerPanel' : '';
        },
        ownPickerProps: function ownPickerProps() {
            return this.options;
        }
    }
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7154892_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7154892_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7154892_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7154892_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7154892_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(39);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(30);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(54);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(101);
var step = __webpack_require__(102);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(52)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(111);
__webpack_require__(112);
__webpack_require__(113);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(53);
var META = __webpack_require__(106).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(38);
var uid = __webpack_require__(23);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(107);
var isArray = __webpack_require__(108);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(19);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(20);
var _create = __webpack_require__(54);
var gOPNExt = __webpack_require__(109);
var $GOPD = __webpack_require__(110);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(56).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(22)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(19);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(56).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(36);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {



/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(117);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(46);
var $export = __webpack_require__(6);
var toObject = __webpack_require__(17);
var call = __webpack_require__(118);
var isArrayIter = __webpack_require__(119);
var toLength = __webpack_require__(44);
var createProperty = __webpack_require__(120);
var getIterFn = __webpack_require__(58);

$export($export.S + $export.F * !__webpack_require__(121)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(25);
module.exports = __webpack_require__(124);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(1).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(25);
module.exports = __webpack_require__(126);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var get = __webpack_require__(58);
module.exports = __webpack_require__(1).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
module.exports = __webpack_require__(1).Number.isNaN;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(6);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm.type !== 'textarea' ? [_vm.prepend ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.slotReady, expression: "slotReady" }], class: [_vm.prefixCls + '-group-prepend'] }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _vm.clearable && _vm.currentValue ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-ios-close-circle', _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-clear', _vm.prefixCls + '-icon-normal'], on: { "click": _vm.handleClear } }) : _vm.icon ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-' + _vm.icon, _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal'], on: { "click": _vm.handleIconClick } }) : _vm.search && _vm.enterButton === false ? _c('i', { staticClass: "ivu-icon ivu-icon-ios-search", class: [_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal', _vm.prefixCls + '-search-icon'], on: { "click": _vm.handleSearch } }) : _vm.showSuffix ? _c('span', { staticClass: "ivu-input-suffix" }, [_vm._t("suffix", [_vm.suffix ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-' + _vm.suffix] }) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('transition', { attrs: { "name": "fade" } }, [!_vm.icon ? _c('i', { staticClass: "ivu-icon ivu-icon-ios-loading ivu-load-loop", class: [_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-validate'] }) : _vm._e()]), _vm._v(" "), _c('input', { ref: "input", class: _vm.inputClasses, attrs: { "id": _vm.elementId, "autocomplete": _vm.autocomplete, "spellcheck": _vm.spellcheck, "type": _vm.type, "placeholder": _vm.placeholder, "disabled": _vm.disabled, "maxlength": _vm.maxlength, "readonly": _vm.readonly, "name": _vm.name, "number": _vm.number, "autofocus": _vm.autofocus }, domProps: { "value": _vm.currentValue }, on: { "keyup": [function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleEnter($event);
      }, _vm.handleKeyup], "keypress": _vm.handleKeypress, "keydown": _vm.handleKeydown, "focus": _vm.handleFocus, "blur": _vm.handleBlur, "input": _vm.handleInput, "change": _vm.handleChange } }), _vm._v(" "), _vm.append ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.slotReady, expression: "slotReady" }], class: [_vm.prefixCls + '-group-append'] }, [_vm._t("append")], 2) : _vm.search && _vm.enterButton ? _c('div', { class: [_vm.prefixCls + '-group-append', _vm.prefixCls + '-search'], on: { "click": _vm.handleSearch } }, [_vm.enterButton === true ? _c('i', { staticClass: "ivu-icon ivu-icon-ios-search" }) : [_vm._v(_vm._s(_vm.enterButton))]], 2) : _vm.showPrefix ? _c('span', { staticClass: "ivu-input-prefix" }, [_vm._t("prefix", [_vm.prefix ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-' + _vm.prefix] }) : _vm._e()])], 2) : _vm._e()] : _vm._e()], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(135)))

/***/ }),
/* 135 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ivu-select-dropdown", class: _vm.className, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function (main) {
    'use strict';

    var fecha = {};
    var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    var twoDigits = /\d\d?/;
    var threeDigits = /\d{3}/;
    var fourDigits = /\d{4}/;
    var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    function shorten(arr, sLen) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i].substr(0, sLen));
        }
        return newArr;
    }

    function monthUpdate(arrName) {
        return function (d, v, i18n) {
            var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
            if (~index) {
                d.month = index;
            }
        };
    }

    function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
            val = '0' + val;
        }
        return val;
    }

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNamesShort = shorten(monthNames, 3);
    fecha.i18n = {
        monthNamesShort: monthNamesShort,
        monthNames: monthNames
    };

    var formatFlags = {
        M: function M(dateObj) {
            return dateObj.getMonth() + 1;
        },
        MM: function MM(dateObj) {
            return pad(dateObj.getMonth() + 1);
        },
        MMM: function MMM(dateObj, i18n) {
            return i18n.monthNamesShort[dateObj.getMonth()];
        },
        MMMM: function MMMM(dateObj, i18n) {
            return i18n.monthNames[dateObj.getMonth()];
        },
        yy: function yy(dateObj) {
            return String(dateObj.getFullYear()).substr(2);
        },
        yyyy: function yyyy(dateObj) {
            return dateObj.getFullYear();
        }
    };

    var parseFlags = {
        M: [twoDigits, function (d, v) {
            d.month = v - 1;
        }],
        yy: [twoDigits, function (d, v) {
            var da = new Date(),
                cent = +('' + da.getFullYear()).substr(0, 2);
            d.year = '' + (v > 68 ? cent - 1 : cent) + v;
        }],
        yyyy: [fourDigits, function (d, v) {
            d.year = v;
        }],
        MMM: [word, monthUpdate('monthNamesShort')],
        MMMM: [word, monthUpdate('monthNames')]
    };
    parseFlags.mm = parseFlags.m;
    parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
    parseFlags.MM = parseFlags.M;

    fecha.masks = {
        'default': 'ddd MMM dd yyyy HH:mm:ss',
        shortDate: 'M/D/yy',
        mediumDate: 'MMM d, yyyy',
        longDate: 'MMMM d, yyyy',
        fullDate: 'dddd, MMMM d, yyyy'
    };

    fecha.format = function (dateObj, mask, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof dateObj === 'number') {
            dateObj = new Date(dateObj);
        }

        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
            throw new Error('Invalid Date in fecha.format');
        }

        mask = fecha.masks[mask] || mask || fecha.masks['default'];

        return mask.replace(token, function ($0) {
            return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
        });
    };

    fecha.parse = function (dateStr, format, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof format !== 'string') {
            throw new Error('Invalid format in fecha.parse');
        }

        format = fecha.masks[format] || format;

        if (dateStr.length > 1000) {
            return false;
        }

        var isValid = true;
        var dateInfo = {};
        format.replace(token, function ($0) {
            if (parseFlags[$0]) {
                var info = parseFlags[$0];
                var index = dateStr.search(info[0]);
                if (!~index) {
                    isValid = false;
                } else {
                    dateStr.replace(info[0], function (result) {
                        info[1](dateInfo, result, i18n);
                        dateStr = dateStr.substr(index + result.length);
                        return result;
                    });
                }
            }

            return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
        });

        if (!isValid) {
            return false;
        }

        var today = new Date();
        if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
            dateInfo.hour = +dateInfo.hour + 12;
        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
        }

        var date;
        if (dateInfo.timezoneOffset != null) {
            dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
            date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
        } else {
            date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
        }
        return date;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = fecha;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return fecha;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        main.fecha = fecha;
    }
})(undefined);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside:mousedown.capture", value: _vm.handleClose, expression: "handleClose", arg: "mousedown", modifiers: { "capture": true } }, { name: "click-outside", rawName: "v-click-outside.capture", value: _vm.handleClose, expression: "handleClose", modifiers: { "capture": true } }], class: _vm.wrapperClasses }, [_c('div', { ref: "reference", class: [_vm.prefixCls + '-rel'] }, [_vm._t("default", [_c('i-input', { key: _vm.forceInputRerender, ref: "input", class: [_vm.prefixCls + '-editor'], attrs: { "element-id": _vm.elementId, "readonly": !_vm.editable || _vm.readonly, "disabled": _vm.disabled, "size": _vm.size, "placeholder": _vm.placeholder, "value": _vm.visualValue, "name": _vm.name, "icon": _vm.iconType }, on: { "on-input-change": _vm.handleInputChange, "on-focus": _vm.handleFocus, "on-blur": _vm.handleBlur, "on-click": _vm.handleIconClick }, nativeOn: { "click": function click($event) {
        return _vm.handleFocus($event);
      }, "mouseenter": function mouseenter($event) {
        return _vm.handleInputMouseenter($event);
      }, "mouseleave": function mouseleave($event) {
        return _vm.handleInputMouseleave($event);
      } } })])], 2), _vm._v(" "), _c('transition', { attrs: { "name": "transition-drop" } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.opened, expression: "opened" }], ref: "drop", attrs: { "placement": _vm.placement } }, [_c('div', [_c(_vm.panel, _vm._b({ ref: "pickerPanel", tag: "component", attrs: { "visible": _vm.visible, "showTime": _vm.type === 'datetime', "confirm": _vm.isConfirm, "selectionMode": _vm.selectionMode, "steps": _vm.steps, "format": _vm.format, "value": _vm.internalValue, "start-date": _vm.startDate, "split-panels": _vm.splitPanels, "picker-type": _vm.type, "focused-date": _vm.focusedDate, "time-picker-options": _vm.timePickerOptions }, on: { "on-pick": _vm.onPick, "on-pick-clear": _vm.handleClear, "on-pick-success": _vm.onPickSuccess, "on-pick-click": function onPickClick($event) {
        _vm.disableClickOutSide = true;
      }, "on-selection-mode-change": _vm.onSelectionModeChange } }, 'component', _vm.ownPickerProps, false))], 1)])], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09433aec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09433aec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09433aec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09433aec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09433aec_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { class: _vm.classes, style: _vm.styles, on: { "click": _vm.handleClick } });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcf2b44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcf2b44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcf2b44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcf2b44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bcf2b44_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, _vm._l(_vm.cells, function (cell) {
    return _c('span', { key: cell.date.getFullYear(), class: _vm.getCellCls(cell), on: { "click": function click($event) {
          _vm.handleClick(cell);
        }, "mouseenter": function mouseenter($event) {
          _vm.handleMouseMove(cell);
        } } }, [_c('em', [_vm._v(_vm._s(cell.date.getFullYear()))])]);
  }));
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_332d9ded_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_332d9ded_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_332d9ded_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_332d9ded_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_332d9ded_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(17);
var $getPrototypeOf = __webpack_require__(55);

__webpack_require__(45)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lang = __webpack_require__(148);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = {
    i: {
        locale: 'zh-CN',
        datepicker: {
            selectDate: '选择日期',
            selectTime: '选择时间',
            startTime: '开始时间',
            endTime: '结束时间',
            clear: '清空',
            ok: '确定',
            datePanelLabel: '[yyyy年] [m月]',
            month: '月',
            month1: '1 月',
            month2: '2 月',
            month3: '3 月',
            month4: '4 月',
            month5: '5 月',
            month6: '6 月',
            month7: '7 月',
            month8: '8 月',
            month9: '9 月',
            month10: '10 月',
            month11: '11 月',
            month12: '12 月',
            year: '年',
            months: {
                m1: '1月',
                m2: '2月',
                m3: '3月',
                m4: '4月',
                m5: '5月',
                m6: '6月',
                m7: '7月',
                m8: '8月',
                m9: '9月',
                m10: '10月',
                m11: '11月',
                m12: '12月'
            }
        }
    }
};

(0, _lang2.default)(lang);

exports.default = lang;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (lang) {
    if (!isServer) {
        if (typeof window.iview !== 'undefined') {
            if (!('langs' in iview)) {
                iview.langs = {};
            }
            iview.langs[lang.i.locale] = lang;
        }
    }
};

var _vue = __webpack_require__(27);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

;

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _typeof2 = __webpack_require__(51);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function () {
    function hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function template(string) {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (args.length === 1 && (0, _typeof3.default)(args[0]) === 'object') {
            args = args[0];
        }

        if (!args || !args.hasOwnProperty) {
            args = {};
        }

        return string.replace(RE_NARGS, function (match, prefix, i, index) {
            (0, _newArrowCheck3.default)(this, _this);

            var result = void 0;

            if (string[index - 1] === '{' && string[index + match.length] === '}') {
                return i;
            } else {
                result = hasOwn(args, i) ? args[i] : null;
                if (result === null || result === undefined) {
                    return '';
                }

                return result;
            }
        }.bind(this));
    }

    return template;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, _vm._l(_vm.cells, function (cell) {
    return _c('span', { key: cell.text, class: _vm.getCellCls(cell), on: { "click": function click($event) {
          _vm.handleClick(cell);
        }, "mouseenter": function mouseenter($event) {
          _vm.handleMouseMove(cell);
        } } }, [_c('em', [_vm._v(_vm._s(cell.text))])]);
  }));
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8bfc56a2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8bfc56a2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8bfc56a2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8bfc56a2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8bfc56a2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ede5fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ede5fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ede5fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ede5fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ede5fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.to ? _c('a', { class: _vm.classes, attrs: { "disabled": _vm.disabled, "href": _vm.linkUrl, "target": _vm.target }, on: { "click": [function ($event) {
        if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) {
          return null;
        }_vm.handleClickLink($event, false);
      }, function ($event) {
        if (!$event.ctrlKey) {
          return null;
        }_vm.handleClickLink($event, true);
      }, function ($event) {
        if (!$event.metaKey) {
          return null;
        }_vm.handleClickLink($event, true);
      }] } }, [_vm.loading ? _c('Icon', { staticClass: "ivu-load-loop", attrs: { "type": "ios-loading" } }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.customIcon) && !_vm.loading ? _c('Icon', { attrs: { "type": _vm.icon, "custom": _vm.customIcon } }) : _vm._e(), _vm._v(" "), _vm.showSlot ? _c('span', { ref: "slot" }, [_vm._t("default")], 2) : _vm._e()], 1) : _c('button', { class: _vm.classes, attrs: { "type": _vm.htmlType, "disabled": _vm.disabled }, on: { "click": _vm.handleClickLink } }, [_vm.loading ? _c('Icon', { staticClass: "ivu-load-loop", attrs: { "type": "ios-loading" } }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.customIcon) && !_vm.loading ? _c('Icon', { attrs: { "type": _vm.icon, "custom": _vm.customIcon } }) : _vm._e(), _vm._v(" "), _vm.showSlot ? _c('span', { ref: "slot" }, [_vm._t("default")], 2) : _vm._e()], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefixCls + '-confirm'], on: { "!keydown": function keydown($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.handleTab($event);
      } } }, [_vm.showTime ? _c('i-button', { class: _vm.timeClasses, attrs: { "size": "small", "type": "text", "disabled": _vm.timeDisabled }, on: { "click": _vm.handleToggleTime } }, [_vm._v("\n        " + _vm._s(_vm.labels.time) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('i-button', { attrs: { "size": "small" }, nativeOn: { "click": function click($event) {
        return _vm.handleClear($event);
      }, "keydown": function keydown($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleClear($event);
      } } }, [_vm._v("\n        " + _vm._s(_vm.labels.clear) + "\n    ")]), _vm._v(" "), _c('i-button', { attrs: { "size": "small", "type": "primary" }, nativeOn: { "click": function click($event) {
        return _vm.handleSuccess($event);
      }, "keydown": function keydown($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleSuccess($event);
      } } }, [_vm._v("\n        " + _vm._s(_vm.labels.ok) + "\n    ")])], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0986b480_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0986b480_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0986b480_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0986b480_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0986b480_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', [_vm.datePanelLabel ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.datePanelLabel.labels[0].type === 'year' || _vm.currentView === 'date', expression: "datePanelLabel.labels[0].type === 'year' || currentView === 'date'" }], class: [_vm.datePrefixCls + '-header-label'], on: { "click": _vm.datePanelLabel.labels[0].handler } }, [_vm._v(_vm._s(_vm.datePanelLabel.labels[0].label) + "\n  ")]) : _vm._e()]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var datePrefixCls = 'ivu-date-picker';

exports.default = {
    props: {
        confirm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        iconBtnCls: function iconBtnCls(direction) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            return [prefixCls + '-icon-btn', datePrefixCls + '-' + String(direction) + '-btn', datePrefixCls + '-' + String(direction) + '-btn-arrow' + String(type)];
        },
        handleShortcutClick: function handleShortcutClick(shortcut) {
            if (shortcut.value) this.$emit('on-pick', shortcut.value());
            if (shortcut.onClick) shortcut.onClick(this);
        },
        handlePickClear: function handlePickClear() {
            this.resetView();
            this.$emit('on-pick-clear');
        },
        handlePickSuccess: function handlePickSuccess() {
            this.resetView();
            this.$emit('on-pick-success');
        },
        handlePickClick: function handlePickClick() {
            this.$emit('on-pick-click');
        },
        resetView: function resetView() {
            var _this = this;

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this);
                return this.currentView = this.selectionMode;
            }.bind(this), 500);
        },
        handleClear: function handleClear() {
            var _this2 = this;

            this.dates = this.dates.map(function () {
                (0, _newArrowCheck3.default)(this, _this2);
                return null;
            }.bind(this));
            this.rangeState = {};
            this.$emit('on-pick', this.dates);
            this.handleConfirm();
        },
        handleConfirm: function handleConfirm(visible, type) {
            this.$emit('on-pick', this.dates, visible, type || this.type);
        },
        onToggleVisibility: function onToggleVisibility(open) {
            var _$refs = this.$refs,
                timeSpinner = _$refs.timeSpinner,
                timeSpinnerEnd = _$refs.timeSpinnerEnd;

            if (open && timeSpinner) timeSpinner.updateScroll();
            if (open && timeSpinnerEnd) timeSpinnerEnd.updateScroll();
        }
    }
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _assist = __webpack_require__(5);

var _util = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        showTime: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd'
        },
        selectionMode: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['year', 'month', 'date']);
            },

            default: 'date'
        },
        shortcuts: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        disabledDate: {
            type: Function,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return false;
            }.bind(undefined)
        },
        value: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [(0, _util.initTimeDate)(), (0, _util.initTimeDate)()];
            }.bind(undefined)
        },
        timePickerOptions: {
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined),
            type: Object
        },
        showWeekNumbers: {
            type: Boolean,
            default: false
        },
        startDate: {
            type: Date
        },
        pickerType: {
            type: String,
            require: true
        },
        focusedDate: {
            type: Date,
            required: true
        }
    },
    computed: {
        isTime: function isTime() {
            return this.currentView === 'time';
        }
    },
    methods: {
        handleToggleTime: function handleToggleTime() {
            this.currentView = this.currentView === 'time' ? 'date' : 'time';
        }
    }
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, on: { "mousedown": function mousedown($event) {
        $event.preventDefault();
      } } }, [_c('div', { class: _vm.panelBodyClasses }, [_c('div', { class: [_vm.prefixCls + '-content'] }, [_c('div', { class: [_vm.datePrefixCls + '-header'] }, [_c('span', { class: _vm.iconBtnCls('prev', '-double'), on: { "click": function click($event) {
        _vm.prevYear('left');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1), _vm._v(" "), _c('date-panel-label', { attrs: { "date-panel-label": _vm.leftDatePanelLabel, "current-view": _vm.leftDatePanelView, "date-prefix-cls": _vm.datePrefixCls } }), _vm._v(" "), _c('span', { class: _vm.iconBtnCls('next', '-double'), on: { "click": function click($event) {
        _vm.nextYear('right');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1)], 1), _vm._v(" "), _c(_vm.leftPickerTable, { ref: "leftYearTable", tag: "component", attrs: { "table-date": _vm.leftPanelDate, "selection-mode": "range", "disabled-date": _vm.disabledDate, "range-state": _vm.rangeState, "value": _vm.preSelecting.left ? [_vm.dates[0]] : _vm.dates, "focused-date": _vm.focusedDate }, on: { "on-change-range": _vm.handleChangeRange, "on-pick": _vm.panelPickerHandlers.left, "on-pick-click": _vm.handlePickClick } })], 1)])]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(61);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _input2.default;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(163);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _select2.default;

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a4e7e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a4e7e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a4e7e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a4e7e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a4e7e4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(166);
module.exports = __webpack_require__(1).Number.isFinite;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(6);
var _isFinite = __webpack_require__(4).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside.capture", value: _vm.onClickOutside, expression: "onClickOutside", modifiers: { "capture": true } }, { name: "click-outside", rawName: "v-click-outside:mousedown.capture", value: _vm.onClickOutside, expression: "onClickOutside", arg: "mousedown", modifiers: { "capture": true } }], class: _vm.classes }, [_c('div', { ref: "reference", class: _vm.selectionCls, attrs: { "tabindex": _vm.selectTabindex }, on: { "blur": _vm.toggleHeaderFocus, "focus": _vm.toggleHeaderFocus, "click": _vm.toggleMenu, "keydown": [function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")) {
          return null;
        }return _vm.handleKeydown($event);
      }, function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleKeydown($event);
      }, function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }$event.preventDefault();return _vm.handleKeydown($event);
      }, function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }$event.preventDefault();return _vm.handleKeydown($event);
      }, function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.handleKeydown($event);
      }, function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete"])) {
          return null;
        }return _vm.handleKeydown($event);
      }], "mouseenter": function mouseenter($event) {
        _vm.hasMouseHoverHead = true;
      }, "mouseleave": function mouseleave($event) {
        _vm.hasMouseHoverHead = false;
      } } }, [_vm._t("input", [_c('input', { attrs: { "type": "hidden", "name": _vm.name }, domProps: { "value": _vm.publicValue } })])], 2), _vm._v(" "), _c('transition', { attrs: { "name": "transition-drop" } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.dropVisible, expression: "dropVisible" }], ref: "dropdown", class: _vm.dropdownCls, attrs: { "placement": _vm.placement } }, [_c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.showNotFoundLabel, expression: "showNotFoundLabel" }], class: [_vm.prefixCls + '-not-found'] }, [_c('li', [_vm._v(_vm._s(_vm.localeNotFoundText))])]), _vm._v(" "), _c('ul', { class: _vm.prefixCls + '-dropdown-list' }, [!_vm.remote || _vm.remote && !_vm.loading ? _c('functional-options', { attrs: { "options": _vm.selectOptions, "slot-update-hook": _vm.updateSlotOptions, "slot-options": _vm.slotOptions } }) : _vm._e()], 1), _vm._v(" "), _c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.loading, expression: "loading" }], class: [_vm.prefixCls + '-loading'] }, [_vm._v(_vm._s(_vm.localeLoadingText))])])], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })
/******/ ]);
});
//# sourceMappingURL=iview.js.map