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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "./src/blocks/Inspector.js":
/*!*********************************!*\
  !*** ./src/blocks/Inspector.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");







function Inspector({
  attributes,
  setAttributes,
  chartObj
}) {
  const {
    title,
    labels,
    chartBgColor,
    labelType,
    chartType,
    sameColor
  } = attributes; // local states for Custom Label Colors

  const [labelOptions, setLabelOptions] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedColor, setSelectedColor] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(chartBgColor[0]);
  const [selectedLabel, setSelectedLabel] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(labels[0]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // set the Labels in SelectControls required format in the. Labels will Change when a new CSV is uploaded
    processLabelsforOptions();
  }, []);

  const processLabelsforOptions = () => {
    let alllabelForOptions = labels.map(label => {
      return {
        value: label,
        label: label
      };
    });
    setLabelOptions(alllabelForOptions);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartObj) {
      // Update the Labels in SelectControllers if new CSV is Uploadded
      processLabelsforOptions();
    }
  }, [labels]);
  /* File Upload Start */
  // handle CSV Upload from FormFileUpload Component and pass on result to DataPareser

  const handleCSVupload = e => {
    const CSVreader = new FileReader();

    CSVreader.onload = () => {
      DataParser(CSVreader.result);
    };

    CSVreader.readAsText(e.target.files[0]);
    setSelectedColor('#ff6385');
  }; // Parse the Data in required Format and set new labels, chartdata and LabelType. (Label Type is what you see in Select Controller Select [LabelType] by default it is Language)


  const DataParser = result => {
    const table = result.split('\n').map(eachrow => eachrow.split(',')); // First Split the data in rows and then separate the column values

    const columnnames = table[0]; // Get the column names which is the first item in rows array
    //const chartLabelType = columnnames[0];

    table.shift(); // remove the first item which is column names to get the rows data

    const rowsdata = table; //Get the labels which is the second item in rows array

    const labels = rowsdata.map(row => row[0]); //Get the data which is the second item in rows array

    const data = rowsdata.map(row => parseInt(row[1]));
    setAttributes({
      labels: labels,
      chartdata: data //	labelType: chartLabelType,

    });
  };
  /* File Upload End */

  /* Label Bg Color Settings Start */
  // If same color is selected, set the color to #812ffe and set set label to first label
  // else switch back to default colors


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartObj) {
      if (sameColor) {
        setSelectedColor('#812ffe');
        setSelectedLabel(labels[0]);
      } else {
        switchtoDefaultColors();
      }
    }
  }, [sameColor]);

  const switchtoDefaultColors = () => {
    let defaultcolors = ['#ff6385', '#36a3eb', '#ffcc56', '#812ffe', '#00e893'];
    let newBgColorsFull = [];
    labels.forEach(item => {
      if (newBgColorsFull.length <= labels.length) {
        newBgColorsFull.push(...defaultcolors);
      }
    });
    let newBgColor = newBgColorsFull.slice(0, labels.length);
    setAttributes({
      chartBgColor: [...newBgColor]
    });
    setSelectedColor('#ff6385');
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartObj) {
      if (sameColor) {
        // When Same Color is Selected, Switch all bars to same color
        updateAllLabelColors();
      } else {
        // if theLabel Color of  currently selectedLabel is Changed, Update the Label Color
        updateLabelColor();
      }
    }
  }, [selectedColor]);

  const updateLabelColor = () => {
    const labelIndex = labels.indexOf(selectedLabel);
    let newLabelColors = [...chartBgColor];
    newLabelColors[labelIndex] = selectedColor;
    setAttributes({
      chartBgColor: [...newLabelColors]
    });
  };

  const updateAllLabelColors = () => {
    setAttributes({
      chartBgColor: [selectedColor]
    });
  }; // set default selectedcolor of the current selectedlabel using it's index


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const labelIndex = labels.indexOf(selectedLabel);
    const color = chartBgColor[labelIndex];

    if (chartObj && !sameColor) {
      setSelectedColor(color);
    }
  }, [selectedLabel]);
  /* Label Bg Color Settings End */
  // ColorPallete Onchange Function

  const onLabelColorChange = newColor => {
    setSelectedColor(newColor);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Chart Settings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Chart Tile",
    value: title,
    onChange: title => setAttributes({
      title
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FormFileUpload"], {
    accept: ".csv",
    onChange: handleCSVupload,
    render: ({
      openFileDialog
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      style: {
        marginBottom: '10px'
      },
      isSecondary: true,
      onClick: openFileDialog
    }, "Upload CSV File"))
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: `${siteurl}/ChartBlock_Example_Data.csv`,
    download: true
  }, "Download Example CSV File")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Chart Color Settings",
    initialOpen: true
  }, (chartType === 'bar' || chartType === 'line') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      margin: '25px 0 25px 0'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: `Use same color for all Labels `,
    checked: sameColor,
    onChange: e => setAttributes({
      sameColor: e
    })
  })), !sameColor && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(`Select Label`),
    value: selectedLabel,
    onChange: label => setSelectedLabel(label),
    options: [{
      value: null,
      label: `Select Label`
    }, ...labelOptions]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Select Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
    value: selectedColor,
    colors: [{
      color: '#ff6385'
    }, {
      color: '#36a3eb'
    }, {
      color: '#ffcc56'
    }, {
      color: '#812ffe'
    }, {
      color: '#00e893'
    }],
    style: {
      width: '200px'
    },
    onChange: onLabelColorChange
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/bar/block.json":
/*!***********************************!*\
  !*** ./src/blocks/bar/block.json ***!
  \***********************************/
/*! exports provided: apiVersion, name, category, textdomain, attributes, supports, example, editorScript, script, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"charts-blocks/bar\",\"category\":\"charts-blocks\",\"textdomain\":\"charts-blocks\",\"attributes\":{\"title\":{\"type\":\"string\",\"default\":\"Mostly Spoken Languages across the World\"},\"labelType\":{\"type\":\"string\",\"default\":\"Language\"},\"labels\":{\"type\":\"array\",\"default\":[\"English\",\"Spanish\",\"French\"]},\"chartType\":{\"type\":\"string\",\"default\":\"bar\"},\"chartdata\":{\"type\":\"array\",\"default\":[300,50,100]},\"chartBgColor\":{\"type\":\"array\",\"default\":[\"#ff6385\",\"#36a3eb\",\"#ffcc56\",\"#812ffe\",\"#00e893\"]},\"chartID\":{\"type\":\"string\",\"default\":null},\"barAxes\":{\"type\":\"string\",\"default\":\"x\"},\"sameColor\":{\"type\":\"boolean\",\"default\":false}},\"supports\":{\"align\":[\"wide\",\"full\"],\"html\":false},\"example\":{},\"editorScript\":\"file:./build/index.js\",\"script\":\"file:./build/frontendscript.js\"}");

/***/ }),

/***/ "./src/blocks/bar/index.js":
/*!*********************************!*\
  !*** ./src/blocks/bar/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/blocks/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/bar/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/bar/block.json", 1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  name,
  category,
  attributes,
  supports,
  textdomain,
  example
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "250.000000pt",
  height: "250.000000pt",
  viewBox: "0 0 250.000000 250.000000",
  preserveAspectRatio: "xMidYMid meet"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(0.000000,250.000000) scale(0.100000,-0.100000)",
  fill: "#1E1E1E",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M250 1235 l0 -1115 255 0 255 0 0 1115 0 1115 -255 0 -255 0 0 -1115z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M1020 1050 l0 -940 255 0 255 0 0 940 0 940 -255 0 -255 0 0 -940z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M1760 800 l0 -680 255 0 255 0 0 680 0 680 -255 0 -255 0 0 -680z"
})));
const settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bar Chart', `${textdomain}`),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display your data in a Bar Chart.', `${textdomain}`),
  icon,
  category,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bar Chart', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bar', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts block', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts-blocks', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graph', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graphs', `${textdomain}`)],
  supports,
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  },
  example
};


/***/ }),

/***/ "./src/blocks/doughnut/block.json":
/*!****************************************!*\
  !*** ./src/blocks/doughnut/block.json ***!
  \****************************************/
/*! exports provided: apiVersion, name, category, textdomain, attributes, supports, example, editorScript, script, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"charts-blocks/doughnut\",\"category\":\"charts-blocks\",\"textdomain\":\"charts-blocks\",\"attributes\":{\"title\":{\"type\":\"string\",\"default\":\"Mostly Spoken Languages across the World\"},\"labelType\":{\"type\":\"string\",\"default\":\"Language\"},\"labels\":{\"type\":\"array\",\"default\":[\"English\",\"Spanish\",\"French\"]},\"chartType\":{\"type\":\"string\",\"default\":\"doughnut\"},\"chartdata\":{\"type\":\"array\",\"default\":[300,50,100]},\"chartBgColor\":{\"type\":\"array\",\"default\":[\"#ff6385\",\"#36a3eb\",\"#ffcc56\",\"#812ffe\",\"#00e893\"]},\"chartID\":{\"type\":\"string\",\"default\":null}},\"supports\":{\"align\":[\"wide\",\"full\"],\"html\":false},\"example\":{},\"editorScript\":\"file:./build/index.js\",\"script\":\"file:./build/frontendscript.js\"}");

/***/ }),

/***/ "./src/blocks/doughnut/index.js":
/*!**************************************!*\
  !*** ./src/blocks/doughnut/index.js ***!
  \**************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/blocks/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/doughnut/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/doughnut/block.json", 1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  name,
  category,
  attributes,
  supports,
  textdomain,
  example
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "980.000000pt",
  height: "980.000000pt",
  viewBox: "0 0 980.000000 980.000000",
  preserveAspectRatio: "xMidYMid meet"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(0.000000,980.000000) scale(0.100000,-0.100000)",
  fill: "#1E1E1E",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M4900 8578 l0 -1225 121 -6 c1053 -57 1943 -765 2234 -1776 54 -190\n95 -453 95 -618 l0 -53 1225 0 1225 0 0 73 c0 40 -5 144 -10 232 -70 1094\n-491 2109 -1216 2935 -112 128 -386 398 -509 501 -848 714 -1878 1112 -2987\n1155 l-178 7 0 -1225z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M4200 9749 c-952 -143 -1794 -528 -2505 -1144 -147 -127 -423 -405\n-536 -540 -1099 -1306 -1443 -3063 -917 -4685 194 -597 500 -1146 922 -1650\n98 -117 370 -393 496 -504 1149 -1010 2674 -1424 4180 -1136 807 155 1604 539\n2235 1078 133 113 384 361 499 492 527 598 885 1282 1080 2057 46 183 99 479\n112 616 l7 77 -247 0 c-175 0 -246 -3 -246 -11 0 -25 -33 -232 -56 -354 -165\n-861 -621 -1699 -1261 -2316 -616 -593 -1371 -988 -2203 -1153 -1142 -227\n-2303 0 -3284 641 -477 312 -924 755 -1243 1233 -591 887 -839 1941 -707 3010\n96 782 425 1559 924 2184 706 885 1701 1454 2831 1620 59 9 112 16 118 16 8 0\n11 71 11 245 l0 245 -42 -1 c-24 0 -99 -9 -168 -20z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M4258 7764 c-1097 -245 -1957 -1094 -2218 -2189 -106 -444 -104 -928\n5 -1372 102 -416 295 -809 561 -1143 87 -109 344 -367 454 -454 332 -265 745\n-466 1160 -565 246 -59 387 -75 680 -75 223 0 288 4 410 22 533 82 983 275\n1410 606 129 100 360 329 463 458 298 374 494 789 592 1250 l23 108 -248 0\n-248 0 -22 -92 c-218 -891 -925 -1591 -1820 -1802 -200 -48 -319 -60 -560 -60\n-243 0 -359 12 -565 61 -527 124 -1005 427 -1347 853 -275 344 -445 736 -515\n1190 -24 159 -24 519 0 680 118 769 554 1409 1224 1794 171 98 427 199 622\n245 46 11 85 22 87 24 3 2 3 114 2 249 l-3 245 -147 -33z"
})));
const settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Doughnut Chart', `${textdomain}`),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display your data in a Doughnut Chart.', `${textdomain}`),
  icon,
  category,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Doughnut chart', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Doughnut', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts block', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts-blocks', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graph', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graphs', `${textdomain}`)],
  supports,
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  },
  example
};


/***/ }),

/***/ "./src/blocks/edit.js":
/*!****************************!*\
  !*** ./src/blocks/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Inspector */ "./src/blocks/Inspector.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");






function Edit({
  attributes,
  setAttributes,
  className
}) {
  const mycanvas = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    labels,
    title,
    chartdata,
    chartBgColor,
    labelType,
    barAxes,
    chartID,
    chartType
  } = attributes;
  const [chartObj, setChartObj] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if chartID is null then create a unique id for the frontend Chart
    if (!chartID) {
      const uid = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
      setAttributes({
        chartID: `chart-${uid}`
      });
    }

    let chartInstance = new Chart(mycanvas.current, {
      type: chartType,
      data: {
        labels,
        datasets: [{
          data: chartdata,
          backgroundColor: chartBgColor,
          hoverOffset: 2
        }]
      },
      options: {
        indexAxis: barAxes ? barAxes : null,

        /* 	fill: true,
        backgroundColor: 'rgba(244, 144, 128, 0.1)', */
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: title
          },
          legend: {
            display: chartType === 'bar' || chartType === 'line' ? false : true
          }
        }
      }
    });
    setChartObj(chartInstance);
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartObj) {
      /* If New CSV is uploaded Update Chart settings and Re Render the canvas */
      updateChartSettings();
    }
  }, [chartdata]);

  const updateChartSettings = () => {
    /* 	Function to Remove the Old Dataset and Push the Uploaded one */
    filterData(chartObj);
    chartObj.data.labels = labels;
    chartObj.update();
  };

  function filterData(chart) {
    if (chartType === 'bar' || chartType === 'line') {
      /* Old dataset length */
      const existingdataLength = chart.data.datasets[0].data.length; // exisiting colors

      let colors = [...chartBgColor];
      /*  From the existing dataset, remove the old data set items
        and push the new uploaded dataset to it */

      chartdata.forEach((dataitem, index) => {
        if (index < existingdataLength) {
          chart.data.datasets[0].data.shift();
        }

        chart.data.datasets[0].data.push(dataitem); // if the dataset has new bars (that is if it's length is greater than existing)
        // add colors for the new for the new bars

        if (chartBgColor.length <= chartdata.length) {
          chartBgColor.push(...colors);
        }
      });
      let newBgColor = chartBgColor.slice(0, chartdata.length);
      setAttributes({
        chartBgColor: newBgColor
      });
    } else {
      chartObj.data.datasets[0].data = chartdata;
    }
  } // If the Bg color of label or The title is Changed, Update the Chart


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartObj) {
      chartObj.options.plugins.title.text = title;
      chartObj.data.datasets[0].backgroundColor = chartBgColor;
      chartObj.update();
    }
  }, [chartBgColor, title]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "chart-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    chartObj: chartObj,
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("canvas", {
    ref: mycanvas,
    className: className,
    style: {
      margin: 40
    },
    width: "800",
    height: "800"
  })));
}

/***/ }),

/***/ "./src/blocks/horizontal-bar/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/horizontal-bar/block.json ***!
  \**********************************************/
/*! exports provided: apiVersion, name, category, textdomain, attributes, supports, example, editorScript, script, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"charts-blocks/horizontal-bar\",\"category\":\"charts-blocks\",\"textdomain\":\"charts-blocks\",\"attributes\":{\"title\":{\"type\":\"string\",\"default\":\"Mostly Spoken Languages across the World\"},\"labelType\":{\"type\":\"string\",\"default\":\"Language\"},\"labels\":{\"type\":\"array\",\"default\":[\"English\",\"Spanish\",\"French\"]},\"chartType\":{\"type\":\"string\",\"default\":\"bar\"},\"chartdata\":{\"type\":\"array\",\"default\":[300,50,100]},\"chartBgColor\":{\"type\":\"array\",\"default\":[\"#ff6385\",\"#36a3eb\",\"#ffcc56\",\"#812ffe\",\"#00e893\"]},\"chartID\":{\"type\":\"string\",\"default\":null},\"barAxes\":{\"type\":\"string\",\"default\":\"y\"}},\"supports\":{\"align\":[\"wide\",\"full\"],\"html\":false},\"example\":{},\"editorScript\":\"file:./build/index.js\",\"script\":\"file:./build/frontendscript.js\"}");

/***/ }),

/***/ "./src/blocks/horizontal-bar/index.js":
/*!********************************************!*\
  !*** ./src/blocks/horizontal-bar/index.js ***!
  \********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/blocks/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/horizontal-bar/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/horizontal-bar/block.json", 1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  name,
  category,
  attributes,
  supports,
  textdomain,
  example
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "250.000000pt",
  height: "250.000000pt",
  viewBox: "0 0 250.000000 250.000000",
  preserveAspectRatio: "xMidYMid meet"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(0.000000,250.000000) scale(0.100000,-0.100000)",
  fill: "#1E1E1E",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M120 2090 l0 -250 1135 0 1135 0 0 250 0 250 -1135 0 -1135 0 0 -250z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M110 1280 l0 -310 755 0 755 0 0 310 0 310 -755 0 -755 0 0 -310z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M120 460 l0 -290 1035 0 1035 0 0 290 0 290 -1035 0 -1035 0 0 -290z"
})));
const settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Horizontal Bar Chart', `${textdomain}`),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display your data in a Horizontal Bar Chart.', `${textdomain}`),
  icon: icon,
  category,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Horizontal Bar Chart', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Horizontal Bar', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts block', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts-blocks', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graph', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graphs', `${textdomain}`)],
  supports,
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  },
  example
};


/***/ }),

/***/ "./src/blocks/horizontal-line/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/horizontal-line/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, category, textdomain, attributes, supports, example, editorScript, script, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"charts-blocks/horizontal-line\",\"category\":\"charts-blocks\",\"textdomain\":\"charts-blocks\",\"attributes\":{\"title\":{\"type\":\"string\",\"default\":\"Mostly Spoken Languages across the World\"},\"labelType\":{\"type\":\"string\",\"default\":\"Language\"},\"labels\":{\"type\":\"array\",\"default\":[\"English\",\"Spanish\",\"French\"]},\"chartType\":{\"type\":\"string\",\"default\":\"line\"},\"chartdata\":{\"type\":\"array\",\"default\":[300,50,100]},\"chartBgColor\":{\"type\":\"array\",\"default\":[\"#ff6385\",\"#36a3eb\",\"#ffcc56\",\"#812ffe\",\"#00e893\"]},\"chartID\":{\"type\":\"string\",\"default\":null},\"barAxes\":{\"type\":\"string\",\"default\":\"y\"}},\"supports\":{\"align\":[\"wide\",\"full\"],\"html\":false},\"example\":{},\"editorScript\":\"file:./build/index.js\",\"script\":\"file:./build/frontendscript.js\"}");

/***/ }),

/***/ "./src/blocks/horizontal-line/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/horizontal-line/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/blocks/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/horizontal-line/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/horizontal-line/block.json", 1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  name,
  category,
  attributes,
  supports,
  textdomain,
  example
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "250.000000pt",
  height: "250.000000pt",
  viewBox: "0 0 250.000000 250.000000",
  preserveAspectRatio: "xMidYMid meet"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(0.000000,250.000000) scale(0.100000,-0.100000)",
  fill: "#1E1E1E",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M190 1250 l0 -1070 1065 0 1065 0 0 100 0 100 -985 0 -985 0 0 970 0\n970 -80 0 -80 0 0 -1070z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M566 2251 c-16 -11 -35 -30 -42 -43 -18 -31 -17 -93 0 -126 28 -53\n121 -86 181 -63 15 6 73 -40 315 -252 l295 -259 1 -56 c0 -32 4 -66 8 -77 5\n-16 -5 -32 -48 -74 l-55 -55 -86 0 -87 -1 -34 -37 c-28 -31 -34 -45 -34 -83 0\n-38 6 -52 34 -83 l35 -37 90 0 90 0 154 -134 154 -134 -4 -61 c-4 -53 -2 -65\n18 -90 26 -34 92 -66 134 -66 42 0 107 32 133 65 46 59 22 154 -48 190 -33 17\n-132 20 -159 5 -16 -8 -46 14 -179 131 l-160 140 5 53 c3 30 1 61 -5 73 -9 17\n-3 28 49 79 l60 59 60 -3 c58 -4 61 -3 99 36 37 37 40 44 40 94 0 63 -20 97\n-69 118 -30 12 -101 10 -132 -4 -24 -10 -603 499 -593 522 14 32 16 93 4 122\n-7 17 -27 39 -45 50 -44 27 -138 28 -179 1z"
})));
const settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Horizontal Line Chart', `${textdomain}`),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display your data in a Horizontal Line Chart.', `${textdomain}`),
  icon,
  category,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Horizontal Line Chart', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Horizontal Line ', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts block', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts-blocks', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graph', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graphs', `${textdomain}`)],
  supports,
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  },
  example
};


/***/ }),

/***/ "./src/blocks/line/block.json":
/*!************************************!*\
  !*** ./src/blocks/line/block.json ***!
  \************************************/
/*! exports provided: apiVersion, name, category, textdomain, attributes, supports, example, editorScript, script, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"charts-blocks/line\",\"category\":\"charts-blocks\",\"textdomain\":\"charts-blocks\",\"attributes\":{\"title\":{\"type\":\"string\",\"default\":\"Mostly Spoken Languages across the World\"},\"labelType\":{\"type\":\"string\",\"default\":\"Language\"},\"labels\":{\"type\":\"array\",\"default\":[\"English\",\"Spanish\",\"French\"]},\"chartType\":{\"type\":\"string\",\"default\":\"line\"},\"chartdata\":{\"type\":\"array\",\"default\":[300,50,100]},\"chartBgColor\":{\"type\":\"array\",\"default\":[\"#ff6385\",\"#36a3eb\",\"#ffcc56\",\"#812ffe\",\"#00e893\"]},\"chartID\":{\"type\":\"string\",\"default\":null}},\"supports\":{\"align\":[\"wide\",\"full\"],\"html\":false},\"example\":{},\"editorScript\":\"file:./build/index.js\",\"script\":\"file:./build/frontendscript.js\"}");

/***/ }),

/***/ "./src/blocks/line/index.js":
/*!**********************************!*\
  !*** ./src/blocks/line/index.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/blocks/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/line/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/line/block.json", 1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  name,
  category,
  attributes,
  supports,
  textdomain,
  example
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "250.000000pt",
  height: "250.000000pt",
  viewBox: "0 0 250.000000 250.000000",
  preserveAspectRatio: "xMidYMid meet"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(0.000000,250.000000) scale(0.100000,-0.100000)",
  fill: "#1E1E1E",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M140 1210 l0 -1070 1065 0 1065 0 0 100 0 100 -985 0 -985 0 0 970 0\n970 -80 0 -80 0 0 -1070z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M2081 1866 c-53 -29 -85 -122 -62 -181 6 -15 -40 -73 -252 -315\nl-259 -295 -56 -1 c-32 0 -66 -4 -77 -8 -16 -5 -32 5 -74 48 l-55 55 0 86 -1\n87 -37 34 c-31 28 -45 34 -83 34 -38 0 -52 -6 -83 -34 l-37 -35 0 -90 0 -90\n-134 -154 -134 -154 -61 4 c-53 4 -65 2 -90 -18 -34 -26 -66 -92 -66 -134 0\n-42 32 -107 65 -133 59 -46 154 -22 190 48 17 33 20 132 5 159 -8 16 14 46\n131 179 l140 160 53 -5 c30 -3 61 -1 73 5 17 9 28 3 79 -49 l59 -60 -3 -60\nc-4 -58 -3 -61 36 -99 37 -37 44 -40 94 -40 63 0 97 20 118 69 12 30 10 101\n-4 132 -10 24 499 603 522 593 32 -14 93 -16 122 -4 91 38 96 218 8 266 -30\n17 -97 17 -127 0z"
})));
const settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Line Chart', `${textdomain}`),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display your data in a Line Chart.', `${textdomain}`),
  icon,
  category,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Line chart', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Line', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts block', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts-blocks', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graph', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graphs', `${textdomain}`)],
  supports,
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  },
  example
};


/***/ }),

/***/ "./src/blocks/pie/block.json":
/*!***********************************!*\
  !*** ./src/blocks/pie/block.json ***!
  \***********************************/
/*! exports provided: apiVersion, name, category, textdomain, attributes, supports, example, editorScript, script, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"charts-blocks/pie\",\"category\":\"charts-blocks\",\"textdomain\":\"charts-blocks\",\"attributes\":{\"title\":{\"type\":\"string\",\"default\":\"Mostly spoken languages across the world\"},\"labelType\":{\"type\":\"string\",\"default\":\"Language\"},\"labels\":{\"type\":\"array\",\"default\":[\"English\",\"Spanish\",\"French\"]},\"chartType\":{\"type\":\"string\",\"default\":\"pie\"},\"chartdata\":{\"type\":\"array\",\"default\":[300,50,100]},\"chartBgColor\":{\"type\":\"array\",\"default\":[\"#ff6385\",\"#36a3eb\",\"#ffcc56\",\"#812ffe\",\"#00e893\"]},\"chartID\":{\"type\":\"string\",\"default\":null}},\"supports\":{\"align\":[\"wide\",\"full\"],\"html\":false},\"example\":{},\"editorScript\":\"file:./build/index.js\",\"script\":\"file:./build/frontendscript.js\"}");

/***/ }),

/***/ "./src/blocks/pie/index.js":
/*!*********************************!*\
  !*** ./src/blocks/pie/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/blocks/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/pie/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/pie/block.json", 1);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const {
  name,
  category,
  attributes,
  supports,
  textdomain,
  example
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "980.000000pt",
  height: "996.000000pt",
  viewBox: "0 0 980.000000 996.000000",
  preserveAspectRatio: "xMidYMid meet"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(0.000000,996.000000) scale(0.100000,-0.100000)",
  fill: "#1E1E1E",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M4651 9949 c-919 -53 -1828 -376 -2588 -921 -392 -281 -795 -679\n-1089 -1073 -453 -609 -756 -1309 -895 -2064 -42 -229 -79 -608 -79 -808 l0\n-73 2475 0 2475 0 0 2475 0 2475 -77 -1 c-43 -1 -143 -6 -222 -10z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M5468 6803 l-3 -2468 -2467 -3 -2468 -2 0 -33 c0 -57 30 -298 56\n-452 213 -1247 953 -2374 2021 -3078 1226 -808 2759 -986 4147 -482 465 169\n905 418 1313 743 184 147 511 467 659 647 572 692 926 1508 1038 2395 53 415\n44 898 -24 1318 -303 1863 -1704 3357 -3546 3781 -213 49 -565 101 -681 101\nl-43 0 -2 -2467z m722 1886 c724 -184 1381 -559 1915 -1094 681 -681 1093\n-1541 1207 -2520 17 -149 17 -702 0 -860 -98 -881 -449 -1677 -1032 -2338\n-684 -774 -1619 -1259 -2665 -1384 -211 -25 -710 -25 -915 0 -770 95 -1460\n372 -2060 826 -229 174 -491 422 -671 636 -420 499 -714 1077 -868 1705 -16\n69 -33 144 -37 168 l-7 42 2439 0 2439 0 -3 2436 -4 2437 53 -7 c30 -4 123\n-25 209 -47z"
})));
const settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pie Chart', `${textdomain}`),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display your data in a Pie Chart.', `${textdomain}`),
  icon,
  category,
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pie chart', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pie', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts block', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('charts-blocks', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graph', `${textdomain}`), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('graphs', `${textdomain}`)],
  supports,
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  },
  example
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/bar */ "./src/blocks/bar/index.js");
/* harmony import */ var _blocks_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/pie */ "./src/blocks/pie/index.js");
/* harmony import */ var _blocks_doughnut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/doughnut */ "./src/blocks/doughnut/index.js");
/* harmony import */ var _blocks_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/line */ "./src/blocks/line/index.js");
/* harmony import */ var _blocks_horizontal_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/horizontal-bar */ "./src/blocks/horizontal-bar/index.js");
/* harmony import */ var _blocks_horizontal_line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/horizontal-line */ "./src/blocks/horizontal-line/index.js");
/**
 * import Wordpress Dependencies
 */


/**
 * import Block Settings
 */








const regsiterBlock = block => {
  const {
    name,
    settings
  } = block;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])(name, settings);
};

const registerAllChartBlocks = () => {
  const allBlocks = [_blocks_bar__WEBPACK_IMPORTED_MODULE_2__, _blocks_pie__WEBPACK_IMPORTED_MODULE_3__, _blocks_doughnut__WEBPACK_IMPORTED_MODULE_4__, _blocks_line__WEBPACK_IMPORTED_MODULE_5__, _blocks_horizontal_bar__WEBPACK_IMPORTED_MODULE_6__, _blocks_horizontal_line__WEBPACK_IMPORTED_MODULE_7__];
  allBlocks.forEach(block => {
    regsiterBlock(block);
  });
};

registerAllChartBlocks();

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map